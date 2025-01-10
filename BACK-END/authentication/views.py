from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import authentication_classes, permission_classes, api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from authentication.models import User
from django.utils import timezone
from datetime import time

# Create your views here.

@api_view(['POST'])
def authenticacion(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    try:
        user = User.objects.get(username=username)
    except Exception:
        return Response(data={'message':'Usuario o contraseña no validas'}, status=400)
    if not user.check_password(password):
        return Response(data={'message':'Usuario o contraseña no validas'}, status=400)
    
    token = Token.objects.get_or_create(user=user)
    user.last_login = timezone.now()
    user.save()
    return Response({'token':token[0].key, 'admin': user.is_staff}, status=200)

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def log_out(request):
    user: User = request.user
    log_out_time = timezone.now()
    # Se resta el tiempo de salida con el tiempo de inicio de sesion
    total_time = log_out_time - user.last_login
    # Transformamos el tiempo a un formato tipo time para poder guardarlo en la base de datos
    user.total_time = transform_time(total_time.total_seconds())
    user.save()
    return Response(200)

def transform_time(total_seconds):
    """
    Transforma el tiempo total de la sesion en horas, minutos y segundos
    """
    return time(hour=int(total_seconds // 3600), minute=int((total_seconds % 3600) // 60), second=int(total_seconds % 60))