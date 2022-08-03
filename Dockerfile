FROM node:16-alpine3.16

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [node src/index.js]