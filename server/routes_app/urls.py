from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet
from .views import ConntectionToNext

router = DefaultRouter()
router.register(r'profile', ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/test/', ConntectionToNext, name='test-api'),
]