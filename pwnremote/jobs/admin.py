from django.contrib import admin
from .models import Job,CompanyDetail, Feedback, User, emailList

# Register your models here.
admin.site.register(User)
admin.site.register(Job)
# admin.site.register(JobDetail)
# admin.site.register(DesignPost)
admin.site.register(CompanyDetail)
admin.site.register(Feedback)
admin.site.register(emailList)