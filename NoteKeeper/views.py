from django.shortcuts import render
from rest_framework import viewsets
from .models import Notekeeper
from .serializers import NoteKeeperSerializer


class NoteKeeperView(viewsets.ModelViewSet):
    serializer_class = NoteKeeperSerializer
    queryset = Notekeeper.objects.all()

# queryset : this to select data from database, you can select all data or apply filter or what you want,
# in more basic way.

# serializer where the queryset will serialize like convert it to json object to use it in response
# for example, because some ORM query will return QuerySet not a json object
