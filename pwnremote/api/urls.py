from django.urls import path
from .views import (
    JobListView, JobCreateView, JobUpdateView, JobDeleteView, JobDetailView, GeneralFeedbackCreateView, 
)

urlpatterns = [
    path('jobs/', JobListView.as_view()),
    path('create-job/', JobCreateView.as_view()),
    path('job/<pk>/update', JobUpdateView.as_view()),
    path('job/<pk>/delete', JobDeleteView.as_view()),
    path('job/<pk>/', JobDetailView.as_view()),
    path('feedback/', GeneralFeedbackCreateView.as_view()),
    # path("create-checkout-session/", CreatePaymentView.as_view()),
    # path("payments/create-payment/", CreateUpdatePaymentView.as_view()),

]
