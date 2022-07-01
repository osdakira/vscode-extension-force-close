FROM node:18-alpine

RUN npm install -g yo generator-code

WORKDIR /home/node

COPY . .
