from rest_framework import serializers
from .models import Notekeeper

class NoteKeeperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notekeeper
        fields = ('id', 'title', 'description')