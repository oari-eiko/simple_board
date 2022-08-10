from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet

# ルーターのインスタンス作成
apiRouter = routers.DefaultRouter()

# userルート登録
apiRouter.register('users', UserViewSet)

# ルーティング
urlpatterns = [
    path('', include(apiRouter.urls))
]
