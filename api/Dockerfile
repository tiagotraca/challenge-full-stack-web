
FROM node:14-alpine as base

WORKDIR /src

ENV PORT=4000

ENV DB_ENDPOINT="postgres"
ENV DB_USER="postgres"
ENV DB_PASSWORD="admin"
ENV DB_DATABASE="challenge_api"

COPY package.json yarn.lock ./

FROM base as dev
ENV NODE_ENV=development

RUN yarn add nodemon -g
RUN yarn

COPY . .

CMD ["nodemon", "./src/index.js"]