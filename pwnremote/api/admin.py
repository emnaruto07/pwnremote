from django.contrib import admin
from .models import Job, User, emailList, SponsoredJobPost, GeneralFeedback


admin.site.register(User)
admin.site.register(Job)
admin.site.register(GeneralFeedback)
admin.site.register(SponsoredJobPost)
admin.site.register(emailList)