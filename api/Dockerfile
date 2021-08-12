FROM node:14-alpine

RUN apk add tzdata

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /home/node/app

COPY ./src/package*.json ./

RUN npm install --production

COPY ./src ./

EXPOSE 3800

CMD [ "node", "index.js" ]

#CMD tail -f /dev/null
