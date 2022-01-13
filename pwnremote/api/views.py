from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Job
from .serializers import JobListSerializer, GeneralFeedbackSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
import stripe

# This is your test secret API key.

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
                message,
                email,
                ['shazebvps@gmail.com'],
                fail_silently=False,
            )

            return Response({"success":"Sent"})
        return Response({'success':"Failed"}, status=status.HTTP_400_BAD_REQUEST)





# class CompanyDetailView(ListAPIView):
#     serializer_class = CompanyDetailSerializer

#     def get_queryset(self):
#         return Job.objects.all()

# class CompanyCreateView(CreateAPIView):
#     # permission_classes = [IsAuthenticated]
#     serializer_class = CompanyDetailSerializer

#     def perform_create(self, serializer):
#         serializer.save()

class CreatePaymentView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            # Create a PaymentIntent with the order amount and currency
            intent = stripe.PaymentIntent.create(
                amount=10000,
                currency='usd',
                automatic_payment_methods={
                    'enabled': True,
                },
                metadata={
                    "job_id": request.data["job_id"]
                }
            )
            return Response({
                'clientSecret': intent['client_secret']
            })
        except Exception as e:
            return Response({"error": str(e)}, status=403)