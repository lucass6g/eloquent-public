FROM nginx:1.25.2

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN adduser --system --uid 1000 --no-create-home --disabled-login --group nginxuser

# Remove default nginx
RUN rm /usr/share/nginx/html/*

COPY /storybook-static /etc/nginx/html/

RUN chown -R nginxuser:nginxuser /var/cache/nginx \
    && chown -R nginxuser:nginxuser /var/log/nginx \
    && chown -R nginxuser:nginxuser /etc/nginx \
    && touch /var/run/nginx.pid \
    && chown -R nginxuser:nginxuser /var/run/nginx.pid \
    && chown -R nginxuser:nginxuser /run/nginx.pid \
    && chmod 777 /var/run/nginx.pid

USER nginxuser
EXPOSE 8080

ENTRYPOINT ["dumb-init", "nginx", "-g", "daemon off;"]
