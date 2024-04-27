from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WebAppSerializer
from .models import WebAppModal

# by default class LmsView provides implementation for CRUD operations 
class WebAppView(viewsets.ModelViewSet):
    serializer_class = WebAppSerializer
    queryset = WebAppModal.objects.all()
