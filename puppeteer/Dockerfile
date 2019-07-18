FROM buildkite/puppeteer:v1.15.0
ENV  PATH="$PATH:/node_modules"

ARG APP_DIR=/usr/src/app
WORKDIR $APP_DIR
COPY package*.json ./
RUN  npm install
ENV  PATH="$PATH:$APP_DIR/node_modules/.bin"

COPY . ./
