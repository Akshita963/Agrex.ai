from django.contrib import admin
from .models import Notekeeper

class NoteKeeperAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

# Register your models here.

admin.site.register(Notekeeper, NoteKeeperAdmin )