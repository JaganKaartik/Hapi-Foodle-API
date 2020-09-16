FROM node:lastest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./dist .

EXPOSE 8888

#Need to set up NODE ENV

CMD ["npm","start"]

