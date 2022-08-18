from crypt import methods
from hashlib import sha256
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """ USER オブジェクトのCRUD"""
    queryset = User.objects.all().order_by('-created_at')       # モデルのオブジェクト取得
    serializer_class = UserSerializer                           # シリアライザー取得

    # 登録済みか確認（登録済みの場合は、ユーザーのレコードを返す）
    @action(methods=['POST'], detail=False)
    def is_registerd(self, request):
        password = sha256(request.data['password'].encode()).hexdigest()
        user_recode = User.objects.filter(
            name = request.data['username'],
            password = password
        ).values('name', 'created_at')
        return Response(data=user_recode, status=status.HTTP_200_OK)

    # 指定ユーザー名を取得(クエリ―で指定)
    @action(methods=['GET'], detail=False)
    def get_username(self, request):
        user_name = User.objects.filter(name = request.query_params['name']).values('name')
        return Response(data=user_name, status=status.HTTP_200_OK)
