FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# use Nginx to serve the react build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]