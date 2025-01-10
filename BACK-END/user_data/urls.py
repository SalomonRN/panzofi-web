from .views import *
from django.urls import path
urlpatterns = [
    path('', users_data),
    path('button/', add),
    path('description', description)
]
