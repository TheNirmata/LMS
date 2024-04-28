from venv import create
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Profile(models.Model):
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    # profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True)
    role = models.ForeignKey(User, on_delete=models.CASCADE, related_name='roles')

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(role=instance)


from routes_app.models import Profile, User
#dummy data
email='monkeyluffy@onepiece.com'

#test for if user exist in the database 
if User.objects.filter(email=email).exists():
        user = User.objects.get(email=email)
        
        #create new profile instance
        profile = Profile.objects.create(
            first_name = 'Monkey',
            last_name = 'Luffy',
            bio = 'I am the future king of the pirates',
            location = 'East Blue',
            birth_date = '1999-05-05',
            role = user
        )
else:
    print(f'User not found with email: {email}' )