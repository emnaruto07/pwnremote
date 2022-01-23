from allauth.account.views import ConfirmEmailView
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from dj_rest_auth.registration.views import VerifyEmailView, ConfirmEmailView
# from api.views import stripe_webhook

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/account-confirm-email/<str:key>/',ConfirmEmailView.as_view()),
    path('dj-rest-auth/account-confirm-email/',VerifyEmailView.as_view(), name='account_email_verification_sent'),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/', include('api.urls')),
    # path('webhooks/stripe/', stripe_webhook)
]