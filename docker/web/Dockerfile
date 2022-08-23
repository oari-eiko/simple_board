# appコンテナでビルドしたものをnginxで公開
FROM nginx:1.23

# アプリ
COPY ./docker/app/src/simple-board/build /var/www/simple-board

# Nginx設定ファイル
COPY ./docker/web/default.conf /etc/nginx/nginx.conf
