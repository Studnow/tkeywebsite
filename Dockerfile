FROM node:lts

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /vite

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]
