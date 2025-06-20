FROM node

WORKDIR /app

COPY app /app

RUN npm i

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD [ "index.js" ]
