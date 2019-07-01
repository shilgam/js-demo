FROM buildkite/puppeteer:latest

ARG APP_DIR=/usr/src/app
WORKDIR $APP_DIR
COPY package*.json ./
RUN  npm install
COPY . ./
ENV  PATH="$PATH:$APP_DIR/node_modules/.bin"
