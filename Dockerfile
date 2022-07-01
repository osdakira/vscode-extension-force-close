FROM node:18-alpine

RUN npm install -g yo generator-code vsce

WORKDIR /home/node

COPY . .
