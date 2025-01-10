from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.http import HttpRequest
from authentication.models import User
from .serializer import UserSeralizaer

# Create your views here.


@api_view(["PUT"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def add(request: HttpRequest):
    user = request.user
    if request.POST.get("button") == "1":
        user.n_btn1 += 1
    if request.POST.get("button") == "2":
        user.n_btn2 += 1
    user.save()
    return Response(status=200)


@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
def users_data(request):
    users = User.objects.all()
    users = UserSeralizaer(users, many=True).data
    return Response(users)


@api_view(["GET"])
def description(request):
    desc = """
             Esta en una pequeña aplicación que es utilizada para saber cuantas
            veces una persona oprime uno de los dos botones y tambien cuanto
            tiempo estuvo en la página, en base en cuando se loguea y se
            deslogea de la pagina. Se usa React para crear toda la interfaz de
            usuario y Django para el backend."""
    return Response(data={"description": desc}, status=200)
