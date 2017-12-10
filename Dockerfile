FROM node:8-alpine

EXPOSE 3000
WORKDIR /www

COPY ./package.json ./package-lock.json /www/
COPY ./pages /www/pages 

RUN npm i --only=production \
    && npm run build

CMD ["npm", "start", "--", "-p", "3000"]
