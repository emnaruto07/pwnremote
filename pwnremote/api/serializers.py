from rest_framework import serializers
from .models import Job


class JobListSerializer(serializers.ModelSerializer):
    is_owner = serializers.SerializerMethodField()
    
    class Meta:   
        model = Job
        fields = (
            "id",
            "Company_name",
            "Position",
            "Employment_type", 
            "Primary_Skills",
            "Skills_tag",
            "Location",
            "date_created",
            "available",
            "Min_salary",
            "max_salary",
            "Description",
            "company_logo",
            "user",
            "url",
            "email",
            "show_logo",
            "Highlight",
            # "sticky_day",
            # "sticky_week",
            # "sticky_month",
            # "sponsored",
            "feedback",
            'company_twitter',
            'company_email',
            'invoice_email',
            'invoice_address',
            "is_owner"
        )
        read_only_fields = ("date_created", "user")

    def get_is_owner(self, obj):
        user = self.context["request"].user
        return obj.user == user

class GeneralFeedbackSerializer(serializers.Serializer):

    name = serializers.CharField()
    email = serializers.EmailField()
    # subject = serializers.CharField()
    message = serializers.CharField()