from django.db import models

# Create your models here.

class Notekeeper(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    def _str_(self):
        return self.title