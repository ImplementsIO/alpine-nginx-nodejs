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

COPY src/ /app
ADD root/ /

# Replace the entry with yours.
CMD ["node", "/app/index.js"]
```

- Run

```
docker run --name ann -p 80:80 -p 443:443 -p 3000:3000 -v /root/src:/app alpine-nginx-nodejs
```
