Alpine Nginx & Node.js Image

## Information

- Node.js
	- NODE=4.5.0
	- NPM=2
- Nginx
	

## Usage

- on-compile

```
# Dockerfile
FROM thonatos/alpine-nginx-nodejs:on-compile

ENV NGINXLOCATION=CN

ADD root/ /

COPY src/ /app

RUN cd /app && \
    npm install --production && \
    apk del gcc g++ linux-headers && \
    rm -rf /etc/ssl /node-${NODE_VERSION} /usr/include \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html  && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

# Replace the entry with yours.
CMD ["node", "/app/backend/bin/autoload.js"]
```
