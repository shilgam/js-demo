FROM golang:1.12.4-alpine3.9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
ENTRYPOINT go run main.go
