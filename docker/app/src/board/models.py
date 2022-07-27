from django.db import models

# ユーザー
class User(models.Model):
    user_name = models.CharField(max_length=50, unique=True)    # ユーザー名
    user_password = models.CharField(max_length=50)             # パスワード
    create_at = models.DateTimeField()                          # 作成日時

# テーマ
class Theme(models.Model):
    user_name = models.ForeignKey(User, models.CASCADE)         # 外部キー（ユーザー:1対多）
    theme = models.CharField(max_length=100)                    # 議題（テーマ）
    looked = models.IntegerField(default=0)                     # 閲覧数
    created_at = models.DateTimeField()                         # 作成日時
    updated_at = models.DateTimeField()                         # 更新日時

# コメント
class Comment(models.Model):
    user_name = models.ForeignKey(User, models.CASCADE)         # 外部キー（ユーザー:1対多）
    theme = models.ForeignKey(Theme, models.CASCADE)            # 外部キー（テーマ:1対多）
    comment = models.CharField(max_length=1000)                 # コメント
    good = models.IntegerField(default=0)                       # 評価数
    created_at = models.DateTimeField()                         # 作成日時
    updated_at = models.DateTimeField()                         # 更新日時
