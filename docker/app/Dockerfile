# DockerHubから公式のdockerイメージを取り込む
FROM python:3.10

# Python専用の環境変数
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# requirements.txtからモジュールをインストール
WORKDIR /app
RUN pip install --upgrade pip
ADD requirements.txt /app/
RUN pip install -r requirements.txt
