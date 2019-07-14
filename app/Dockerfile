FROM node:12.1.0
ARG APP_DIR="/usr/src/app"
WORKDIR $APP_DIR
COPY package*.json ./
RUN  npm install
ENV  PATH="$PATH:$APP_DIR/node_modules/.bin"
COPY app ./app
