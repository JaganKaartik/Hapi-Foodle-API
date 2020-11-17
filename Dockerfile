FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

EXPOSE 8888
