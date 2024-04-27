# convert model instances to JSON so that the frontend can work with the
# recieved data 

from rest_framework import serializers
from .models import WebAppModal

class WebAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebAppModal
        # fields = ('id', 'title', 'description', 'completed')
        # fi
        fields = '__all__'
        