FROM node:18-alpine

WORKDIR /APP

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3000