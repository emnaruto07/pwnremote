from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Job(models.Model):

    Company_name = models.CharField(max_length=50)
    Position = models.CharField(max_length=100)
    Employment_type = models.CharField(max_length=15)
    Primary_Skills = models.CharField(max_length=50)
    Skills_tag = models.CharField(max_length=100)
    Location = models.CharField(max_length=50)
    date_created = models.DateTimeField(auto_now_add=True)
    available = models.BooleanField(default=True)
    Min_salary = models.PositiveIntegerField()
    max_salary = models.PositiveIntegerField()
    Description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="api")
    company_logo = models.ImageField(blank=True, null=True, upload_to='logo/')
    url = models.URLField(max_length=200)
    email = models.EmailField()
    show_logo = models.BooleanField(default=True)
    Highlight = models.BooleanField(default=False)
    # sticky_day = models.BooleanField(default=False)
    # sticky_week = models.BooleanField(default=False)
    # sticky_month = models.BooleanField(default=False)
    feedback = models.TextField(default="")
    company_twitter = models.CharField(max_length=15, blank=True, default='')
    company_email = models.EmailField(default="")
    invoice_email = models.EmailField(default="")
    invoice_address = models.TextField(default="")

    def __str__(self):
        return self.Company_name


class SponsoredJobPost(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='sponsored_post')
    date_created = models.DateTimeField(auto_now_add=True)
    date_until = models.DateTimeField()
    stripe_payment_intent_id = models.CharField(max_length=150)

# class CompanyDetail(models.Model):
#     job = models.OneToOneField('Job', on_delete=models.CASCADE, related_name='Companydetails')
    

class emailList(models.Model):
    First_name = models.CharField(max_length=15)
    email = models.EmailField()
    send_time = models.CharField(max_length=10)