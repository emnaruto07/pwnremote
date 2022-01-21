import uuid
from rest_framework import status
from django.db import models
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Job, StripeSessionDetails
from .serializers import JobListSerializer, GeneralFeedbackSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import stripe
from django.http import HttpResponse
# This is your test secret API key.

YOUR_DOMAIN = 'http://localhost:3000'

stripe.api_key = settings.STRIPE_SECRET_KEY

class JobListView(ListAPIView):
    serializer_class = JobListSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True).order_by("-date_created")

class JobCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = JobListSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class JobUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = JobListSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True)

class JobDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = JobListSerializer

    def get_queryset(self):
        return Job.objects.all()

class JobDeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Job.objects.all()

#Feedback Direct email

class GeneralFeedbackCreateView(APIView):

    def post(self, request, *args, **kwargs):
        serializer = GeneralFeedbackSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            name = data.get('name')
            # subject = data.get('subject')
            message = data.get('message')
            email = data.get('email')
            send_mail(
                'Feedback from {}'.format(name),
                'Here is the email of the user: {} And this is the message: {}'.format(email, message),
                settings.EMAIL_HOST_USER,
                [settings.FEEDBACK_EMAIL],
                fail_silently=False,
            )
            return Response({"success":"Sent"})
        return Response({'success':"Failed"}, status=status.HTTP_400_BAD_REQUEST)

endpoint_secret = settings.STRIPE_WEBHOOK_SECRET

class CreatePaymentView(APIView):
    def post(self, request, *args, **kwargs):
        # job_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

        # print(job_id)
        # job = Job.objects.get(id=job_id)
        # job = Job.objects.get('id')
        # print(job_id.value)

        try:
            checkout_session = stripe.checkout.Session.create(
                 line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': request.data['params']['price']*100,
                        'product_data': {
                            'name': request.data['params']['Company_name'],
                            # 'images': ['https://i.imgur.com/EHyR2nP.png'],
                        },
                    },
                    'quantity': 1,
                },
            ],
            # metadata={
            #     "job_id": request.data["job_id"]
            # },
                mode='payment',
                success_url=YOUR_DOMAIN + '/payment/success',
                cancel_url=YOUR_DOMAIN + '?canceled=true',
            )
        except Exception as e:
            return str(e)

        return Response({"sessionUrl":checkout_session.url})
        # return redirect(checkout_session.url)

    
@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
        payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)


    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        print(session)
        receipt_email=session["customer_details"]["email"]

        job = Job.objects.get(paid=False)

        #Creating a successfull copy
        StripeSessionDetails.objects.create(
            # job=job.id,
            stripe_payment_intent_id=session["payment_intent"],
            amount=session["amount_total"],
            metadata=session["metadata"],
            created=session["status"],
            currency=session["currency"],
            customer=session["customer"],
            payment_type=session["payment_method_types"],
            mode=session["mode"],
            payment_status=session["payment_status"],
            receipt_email=session["customer_details"]["email"]

        )
        job.paid=True
        job.save()

        send_mail(
            subject="Here is your product",
            message=f"Thanks for your purchase. Here is the product you ordered. The URL is http://www.google.com",
            recipient_list=[receipt_email],
            from_email="shazeb@pwnremote.com"
        )

    # Passed signature verification
        return HttpResponse(status=200)


class CreateUpdatePaymentView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            # data = request.data
            # Create a PaymentIntent with the order amount and currency
            intent = stripe.PaymentIntent.create(
                amount=1000,
                currency='usd',
                automatic_payment_methods={
                    'enabled': True,
                },
            )
            return Response({
                'clientSecret': intent['client_secret']
            })
        except Exception as e:
            return Response({"error": str(e)}, status=403)