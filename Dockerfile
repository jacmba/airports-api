from node:8-alpine

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install

EXPOSE 10010

CMD [ "npm", "start" ]