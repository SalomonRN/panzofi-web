from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    n_btn1 = models.IntegerField(default=0)
    n_btn2 = models.IntegerField(default=0)
    last_login = models.DateTimeField(null=True, blank=True)
    last_logout = models.DateTimeField(null=True, blank=True)
    total_time = models.TimeField(null=True, blank=True)
    
    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username