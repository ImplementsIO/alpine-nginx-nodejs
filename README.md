Alpine Nginx & Node.js Image

## Information

- Node.js
	- NODE=4.5.0
	- NPM=2
- Nginx
	

## Usage

- Onbuild

```
# Dockerfile
FROM thonatos/alpine-nginx-nodejs

ENV NGINXLOCATION=CN

ADD root/ /
COPY src/ /app
RUN cd /app && \
    npm install --production

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

# Replace the entry with yours.
CMD ["node", "/app/backend/bin/autoload.js"]
```

- Run

```
docker run --name ann -p 80:80 -p 443:443 -p 3000:3000 -v /root/src:/app alpine-nginx-nodejs
```


## More

if you need load diffrent conf for nginx, you can:

```
# /root/etc/service.d/nginx/run

# osx : sed -i '' "s/HOST/${RBENV_SHELL}/g" /etc/nginx/conf.d/node.conf
# linux sed -i "s/HOST/${RBENV_SHELL}/g" /etc/nginx/conf.d/node.conf

sed -i "s/{CONF_LOCATION}/${NGINXLOCATION}/g" /etc/nginx/nginx.conf;
```

the nginx.conf:

```
user nginx;
worker_processes 1;

daemon off;

events {
    worker_connections 1024;
}

error_log   /var/log/nginx/error.log warn;
pid         /var/run/nginx.pid;

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
    '$status $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    sendfile on;
    #tcp_nopush on;

    keepalive_timeout 65;

    gzip on;

    include /etc/nginx/conf.d/{CONF_LOCATION}.conf;

}
```
