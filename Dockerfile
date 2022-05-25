FROM node:lts

WORKDIR /vite

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm i

ENTRYPOINT [ "/entrypoint.sh" ]

CMD [ "npm", "run", "dev" ]