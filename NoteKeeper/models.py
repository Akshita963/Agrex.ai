from django.db import models

# Notekeeper modal where we have title and description as columns.

class Notekeeper(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    def _str_(self):
        return self.title