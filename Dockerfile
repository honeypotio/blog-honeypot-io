# syntax=docker/dockerfile:1

## Base
#
ARG RUBY_VERSION
FROM ruby:$RUBY_VERSION AS base

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

RUN apt-get update && apt-get install -y \
    graphicsmagick \
    imagemagick \
    && rm -rf /var/lib/apt/lists/*

## JS-Base
#
FROM base AS js-base
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*
RUN npm install -g gulp n
COPY .nvmrc ./
RUN n $(cat .nvmrc)

## JS-Deps
#
FROM js-base AS js-deps
COPY .nvmrc .npmrc package.json package-lock.json ./
RUN npm install --production=false

## Ruby-Deps
#
FROM base as ruby-deps
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
