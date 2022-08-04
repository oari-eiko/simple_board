from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework import routers
from . import views

from .views import UserViewSet

# ルーターのインスタンス作成
apiRouter = routers.DefaultRouter()

# userルート登録
apiRouter.register('user', UserViewSet)

# ルーティング
urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(apiRouter.urls))
]
