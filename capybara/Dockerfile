FROM ruby:2.6.3-alpine3.9

# dependencies for building native extensions
RUN apk add --no-cache build-base ruby ruby-dev

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install
COPY . .
