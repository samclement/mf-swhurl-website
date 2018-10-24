FROM node:10-alpine
EXPOSE 3000
WORKDIR /www
COPY . /www/
RUN npm i --production \
    && npm run build \
    && npm prune --production
CMD ["yarn", "start", "--", "-p", "3000"]

