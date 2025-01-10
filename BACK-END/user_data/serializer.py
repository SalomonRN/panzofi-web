from rest_framework.serializers import ModelSerializer
from authentication.models import User

class UserSeralizaer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'last_login', 'total_time', 'n_btn1', 'n_btn2']