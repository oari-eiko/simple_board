# appコンテナでビルドしたものをnginxで公開
FROM nginx:1.23
RUN mkdir /app
COPY ./docker/app/src/simple-board/build /var/www/simple-board
COPY ./docker/web/default.conf /etc/nginx/nginx.conf
