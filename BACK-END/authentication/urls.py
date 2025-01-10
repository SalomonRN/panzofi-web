from django.urls import path
from .views import *
urlpatterns = [
    path('login/', authenticacion),
    path('log-out/', log_out),
]
