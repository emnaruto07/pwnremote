from typing import List
from rest_framework import permissions
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView
from .models import Job
from .serializers import JobListSerializer
from rest_framework.permissions import IsAuthenticated

class JobListView(ListAPIView):
    serializer_class = JobListSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True)

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
    serializer_class = JobListSerializer

    def get_queryset(self):
        return Job.objects.all()

class JobDeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Job.objects.all()