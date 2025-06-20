FROM node

WORKDIR /app

COPY app /app

RUN npm install --production

RUN npm prune

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD [ "index.js" ]
