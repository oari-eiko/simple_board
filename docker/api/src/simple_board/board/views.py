from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """ USER オブジェクトのCRUD"""
    queryset = User.objects.all().order_by('-created_at')       # モデルのオブジェクト取得
    serializer_class = UserSerializer                           # シリアライザー取得
