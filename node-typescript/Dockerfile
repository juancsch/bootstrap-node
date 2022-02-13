FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install \
	npm i -g ts-node

COPY . .

ENTRYPOINT [ "/app/bin/main.ts" ]
