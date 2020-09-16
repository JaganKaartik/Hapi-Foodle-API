FROM node:lastest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./dist .

EXPOSE 8888

ENV NODE_ENV=development

CMD ["npm","start"]

