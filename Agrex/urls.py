
from django.contrib import admin
from django.urls import path,include
from NoteKeeper import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'notekeeper', views.NoteKeeperView, 'notekeeper')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),

]
