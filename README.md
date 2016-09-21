Alpine Nginx & Node.js Image

## Information

- Node.js
	- NODE=4.5.0
	- NPM=2
- Nginx
	
## Usage

- on-build

```
# Dockerfile
FROM thonatos/alpine-nginx-nodejs:on-build

ENV NGINXLOCATION=CN

ADD root/ /

ADD src/ /app

RUN cd /app && \
    npm install --production && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

# Replace the entry with yours.
CMD ["node", "/app/backend/bin/autoload.js"]
```