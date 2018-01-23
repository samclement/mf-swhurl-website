FROM node:8-alpine
EXPOSE 3000
ARG DRONE_COMMIT=none
ENV DRONE_COMMIT=$DRONE_COMMIT
WORKDIR /www
COPY . /www/
RUN sed -i '4i\ \ "gitCommitHash": "'"$DRONE_COMMIT"'",' package.json
RUN yarn install --production \
    && npm run build
CMD ["npm", "start", "--", "-p", "3000"]

