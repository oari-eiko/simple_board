from django.db import models
from django.utils import timezone

# ユーザー
class User(models.Model):
    name = models.CharField(max_length=200, db_index=True, unique=True)                 # ユーザー名
    password = models.CharField(max_length=200)                                         # パスワード
    created_at = models.DateTimeField(default=timezone.now)                             # 作成日時
    updated_at = models.DateTimeField(default=timezone.now)                             # 更新日時

    def __str__(self):
        return self.name

# 議題
class Theme(models.Model):
    user_name = models.ForeignKey(User, on_delete=models.CASCADE, db_index=True)        # 作成者
    title = models.CharField(max_length=500)                                            # タイトル
    watched_ids = models.TextField()                                                    # 閲覧ユーザーのid集
    created_at = models.DateTimeField(default=timezone.now)                             # 作成日時
    updated_at = models.DateTimeField(default=timezone.now)                             # 更新日時

    def __str__(self):
        return self.title

# コメント
class Comment(models.Model):
    user_name = models.ForeignKey(User, on_delete=models.CASCADE, db_index=True)        # 作成者
    target_theme = models.ForeignKey(Theme, on_delete=models.CASCADE, db_index=True)    # 対象議題
    comment = models.CharField(max_length=2000)                                         # コメント
    good_ids = models.TextField()                                                       # 評価したユーザーのid集
    created_at = models.DateTimeField(default=timezone.now)                             # 作成日時
    updated_at = models.DateTimeField(default=timezone.now)                             # 更新日時

    def __str__(self):
        return self.comment

# ファン
class Fan(models.Model):
    fan_user_name = models.CharField(max_length=100, db_index=True)                     # ファンユーザー名
    target_user_name = models.ManyToManyField(User, db_index=True)                      # 対象ユーザー
    registered_at = models.DateTimeField(default=timezone.now)                          # 登録日時
