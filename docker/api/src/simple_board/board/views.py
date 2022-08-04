from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class UserViewSet(viewsets.ModelViewSet):
    """ USER オブジェクトのCRUD"""
    queryset = User.objects.all().order_by('-created_at')       # モデルのオブジェクト取得
    serializer_class = UserSerializer                           # シリアライザー取得
