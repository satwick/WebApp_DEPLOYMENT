FROM nginx:alpine
RUN chmod -R 777 /var/log/nginx /var/cache/nginx/ \
     && chmod 644 /etc/nginx/*
RUN chmod -R 770 /var/cache/nginx /var/run /var/log/nginx
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
ENTRYPOINT ["nginx","-g","daemon off;"]
