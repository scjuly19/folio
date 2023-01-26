FROM node

WORKDIR /folio/

COPY package*.json /folio/

RUN npm install

COPY . /folio/

EXPOSE 3000

CMD ["npm","start"]