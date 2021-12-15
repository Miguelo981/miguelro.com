FROM node:latest as node

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/demo-app /usr/share/nginx/html