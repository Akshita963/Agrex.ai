from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Notekeeper
from .serializers import NoteKeeperSerializer


class NoteKeeperView(viewsets.ModelViewSet):
    serializer_class = NoteKeeperSerializer
    queryset = Notekeeper.objects.all()

