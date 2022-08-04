from django.contrib import admin

from .models import User
from .models import Theme
from .models import Comment
from .models import Fan

admin.site.register(User)
admin.site.register(Theme)
admin.site.register(Comment)
admin.site.register(Fan)
