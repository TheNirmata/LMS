from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WebAppView

router = DefaultRouter()
router.register(r'lms', WebAppView, basename='lms')

urlpatterns = [
    path('', include(router.urls))
]

  