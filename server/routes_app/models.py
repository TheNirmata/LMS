from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Profile(models.Model):
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    # profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True)
    role = models.ForeignKey(User, on_delete=models.CASCADE, related_name='roles')

    def __str__(self):
        return self.Profile
#Test user
# user = User.objects.create_user('monkeyluffy@test.com', 'Test_123')
# user.first_name = 'Monkey'
# user.last_name = 'Luffy'
# user.role = 'student'
# user.save()
      