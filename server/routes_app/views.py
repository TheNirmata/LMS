from rest_framework import viewsets
from .models import Profile
from .serializers import ProfileSerializer

from django.http import JsonResponse

# Create your views here.
class ProfileViewSet(viewsets.ModelViewSet):
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer

def ConntectionToNext(request):
  return JsonResponse({'message': 'Server is working!', 'status': 200})