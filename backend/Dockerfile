FROM node:16

WORKDIR /app

RUN chmod -R 777 /app

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . . 

EXPOSE 3000

ENTRYPOINT [ "./init.sh" ]
