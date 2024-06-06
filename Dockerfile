FROM node:20.14.0

COPY . /root/plusquepro
WORKDIR /root/plusquepro
RUN npm i

EXPOSE 3000