# Используем официальный образ Node.js как базовый образ
FROM node:latest

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

CMD ["npm", "start"]