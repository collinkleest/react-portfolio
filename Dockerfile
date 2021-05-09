# build react app
FROM node:12 as build

COPY . /app

WORKDIR /app/

RUN yarn install

RUN yarn build

# production nginx setup
FROM nginx:stable

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
