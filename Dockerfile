
FROM node:dubnium-alpine

WORKDIR /srv/app

COPY package*.json ./
RUN npm ci --only=production

COPY src/ ./src/
COPY static/ ./static/

EXPOSE 8000
