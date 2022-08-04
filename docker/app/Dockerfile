# DockerHubから公式のdockerイメージを取り込む
FROM node:16.16

# ミドルウェアなどインストール
RUN apt update && \
apt -y install \
git \
zip \
unzip \
vim

# vue関連インストール
RUN npm install -g @vue/cli
