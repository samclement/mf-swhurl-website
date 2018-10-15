FROM node:10-alpine
EXPOSE 3000
WORKDIR /www
COPY . /www/
RUN yarn install --production \
    && yarn run build
CMD ["yarn", "start", "--", "-p", "3000"]

