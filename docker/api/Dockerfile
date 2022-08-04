# DockerHubから公式のdockerイメージを取り込む
FROM python:3.10

# Python専用の環境変数を設定
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# ミドルウェアなどインストール
RUN apt update
RUN apt install -y gcc python3-dev

# requirements.txtからモジュールをインストール
WORKDIR /app
RUN pip install --upgrade pip
ADD requirements.txt /app/
RUN pip install -r requirements.txt
