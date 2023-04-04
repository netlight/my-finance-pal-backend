FROM node:18-alpine3.17

WORKDIR /app

COPY src ./src
COPY api ./api
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.prod.json ./tsconfig.prod.json
COPY package.json yarn.lock ./

RUN yarn install

RUN yarn run build

COPY env ./dist/env

USER node

ENTRYPOINT node dist/src/server.js -e production
