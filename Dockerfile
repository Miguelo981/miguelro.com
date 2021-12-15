### Website build
FROM node:latest as node

WORKDIR /app
COPY . .
RUN yarn install

ENV NODE_ENV production

RUN yarn run build

### Server
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/miguelo-platform /usr/share/nginx/html