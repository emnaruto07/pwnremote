from django.contrib import admin
from .models import Job, User, emailList, UpdateJobPost


admin.site.register(User)
admin.site.register(Job)
# admin.site.register(GeneralFeedback)
admin.site.register(UpdateJobPost)
admin.site.register(emailList)