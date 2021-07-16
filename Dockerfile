# Stage Base
FROM node:14.17.1-alpine as base
RUN npm install pnpm --global
WORKDIR /app

# Stage Build
FROM base as build
COPY . .
RUN pnpm install
RUN pnpm build:prod

# Stage Webserver
FROM nginx:stable-alpine as webserver
COPY --from=build /app/nginx/nginx.prod.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
