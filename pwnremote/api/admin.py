from django.contrib import admin
from .models import FeedbackBox, Job,CompanyDetail,User, emailList, SponsoredJobPost

# Register your models here.
admin.site.register(User)
admin.site.register(Job)
admin.site.register(CompanyDetail)
admin.site.register(SponsoredJobPost)
admin.site.register(FeedbackBox)
admin.site.register(emailList)