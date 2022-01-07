from django.contrib import admin
from .models import Job,CompanyDetail, Feedback, User, emailList, SponsoredJobPost

# Register your models here.
admin.site.register(User)
admin.site.register(Job)
admin.site.register(CompanyDetail)
admin.site.register(SponsoredJobPost)
admin.site.register(Feedback)
admin.site.register(emailList)