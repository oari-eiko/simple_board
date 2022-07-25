# DockerHubから公式のdockerイメージを取り込む
FROM php:8.1-fpm

# composerのインストール
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

# ミドルウェアのインストール
RUN apt-get update && \
apt-get -y install \
git \
zip \
unzip \
vim \
libpng-dev \
libpq-dev \
&& docker-php-ext-install mysqli

# Node.jsとnpmをインストール
RUN apt-get -y install nodejs npm

# laravelをインストール
RUN composer global require laravel/installer

# laravelコマンドを叩けるようにパスを通す
ENV PATH $PATH:/root/.composer/vendor/bin

