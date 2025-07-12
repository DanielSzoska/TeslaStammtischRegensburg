FROM nginx:stable-alpine

# Custom nginx config to enable Browser History Routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf *

COPY dist/ .
COPY dist/.well-known .
