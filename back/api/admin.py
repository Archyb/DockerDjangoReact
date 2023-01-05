from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Dev)
admin.site.register(Client)
admin.site.register(Project)
admin.site.register(Invoice)
