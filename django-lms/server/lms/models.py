from django.db import models

# descrives three props of the WebAppModel
class Lms(models.Model):
  title = models.models.CharField(max_length=120)
  description = models.TextField()
  # status of tasket -task will be either completed or not completed at any time 
  completed = models.BooleanField(default=False)
  
  def _str_(self): 
    return self.title
