# syntax=docker/dockerfile:1

## Base
#
ARG RUBY_VERSION
FROM ruby:$RUBY_VERSION-alpine3.14 AS base

ENV USER=honeyblog
ENV UID=1000
ENV GID=1000

RUN addgroup \
    --system \
    --gid "$GID" \
    "$USER"

RUN adduser \
    --disabled-password \
    --ingroup "$USER" \
    --system \
    --uid "$UID" \
    "$USER"

RUN apk add --update --no-cache \
    graphicsmagick \
    imagemagick \
    libc6-compat \
    zlib-dev

## JS-Base
#
FROM base AS js-base
RUN apk add --update --no-cache \
    nodejs \
    npm
RUN npm install -g gulp

## JS-Deps
#
FROM js-base AS js-deps
RUN apk add --update --no-cache \
    build-base \
    make
COPY .npmrc package.json package-lock.json ./
RUN npm install --production=false

## Ruby-Deps
#
FROM base as ruby-deps
RUN apk add --update --no-cache \
    build-base \
    make
COPY .ruby-version Gemfile Gemfile.lock ./
RUN MAKE="make --jobs $(nproc)" bundle install --jobs $(nproc) --no-cache

## App
#
FROM js-base AS app
USER honeyblog
WORKDIR /app

COPY --chown=honeymails --from=ruby-deps /usr/local/bundle/ /usr/local/bundle/
COPY --chown=honeymails --from=js-deps /node_modules /app/node_modules
COPY --chown=honeymails . ./

CMD ["bundle", "exec", "jekyll", "build"]
