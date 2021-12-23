### Website build

FROM node:16-alpine3.14 as builder

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

### Server
FROM nginx:alpine as server
#COPY /ssl /etc/ssl
COPY --from=builder /app/dist/miguelo-platform /usr/share/nginx/html
#COPY /nginx.conf  /etc/nginx/conf.d/default.conf