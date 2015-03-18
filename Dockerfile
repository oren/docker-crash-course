FROM nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY website /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
