### Website build
FROM node:latest as node

WORKDIR /app
COPY . .
RUN yarn install

ENV NODE_ENV production

RUN yarn run build

### Server
FROM nginx:alpine
COPY --from=node /app/dist/miguelo-platform /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80