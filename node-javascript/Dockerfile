FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "/app/bin/main.js" ]
