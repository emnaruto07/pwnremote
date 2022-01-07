from rest_framework.serializers import ModelSerializer
from .models import Job

class JobListSerializer(ModelSerializer):
    
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
            "sticky_day",
            "sticky_week",
            "sticky_month",
            "sponsored"
        )
        read_only_fields = ("date_created", "user")