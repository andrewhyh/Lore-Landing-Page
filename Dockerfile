# Stage 1: Build the project
FROM node:lts AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the static files
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if we had one, but default is usually fine for static sites
# If you need custom routing (e.g. for SPA fallback), uncomment the next line and add nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
