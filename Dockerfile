FROM node:8-alpine
EXPOSE 3000
WORKDIR /www
COPY . /www/
RUN yarn install --production \
    && npm run build
CMD ["npm", "start", "--", "-p", "3000"]

