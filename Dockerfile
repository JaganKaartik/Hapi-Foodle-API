FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install yarn

RUN yarn install

COPY . .

EXPOSE 8888

ENV NODE_ENV=development

CMD ["yarn","dev"]

