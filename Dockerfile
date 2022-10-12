FROM node:16

RUN npm i -g npm

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY app.js .

CMD ["node", "app.js"]

