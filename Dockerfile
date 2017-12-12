FROM node:8-alpine

EXPOSE 3000
WORKDIR /www

COPY ./next.config.js ./package.json ./package-lock.json /www/
COPY ./pages /www/pages 
COPY ./blocks /www/blocks
COPY ./elements /www/elements

RUN npm i --only=production \
    && npm run build

CMD ["npm", "start", "--", "-p", "3000"]
