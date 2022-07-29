# DockerHubから公式のdockerイメージを取り込む
FROM php:8.1-fpm

# composerのインストール
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

# ミドルウェアのインストール
RUN apt update && \
apt -y install \
git \
zip \
unzip \
vim \
libpng-dev \
libpq-dev \
&& docker-php-ext-install mysqli pdo_mysql

# Node.jsとnpmをインストール
RUN apt -y install nodejs npm
RUN npm install -g npm
RUN npm install -g n
RUN n 16.16.0

# laravelをインストール
RUN composer global require laravel/installer

# laravelコマンドを叩けるようにパスを通す
ENV PATH $PATH:/root/.composer/vendor/bin

