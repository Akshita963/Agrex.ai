from rest_framework import serializers
from .models import Notekeeper

class NoteKeeperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notekeeper
        fields = ('id', 'title', 'description')

# serializer for notekeeper modal that allow complex data such as querysets and model instances to be
# converted to any other content types.