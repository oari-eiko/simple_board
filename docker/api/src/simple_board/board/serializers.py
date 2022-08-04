from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # json で出力するフィールド
        fields = ('id', 'name', 'password', 'created_at', 'updated_at')
        # 読み込みのみ（更新不可）
        read_only_fields = ('id',)
        # 書き込みのみ（読み込み不可）
        extra_kwargs = { 'password': {'write_only': True} }
