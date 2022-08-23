# DockerHubから公式のdockerイメージを取り込む
FROM node:16.16

# ミドルウェアなどインストール
RUN apt update && \
apt -y install \
git \
zip \
unzip \
vim

# npmアップデート
RUN npm install -g npm
