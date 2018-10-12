FROM node:10-alpine
EXPOSE 3000
ARG DRONE_COMMIT=none
ARG DRONE_TAG=none
ENV DRONE_COMMIT=$DRONE_COMMIT
ENV DRONE_TAG=$DRONE_TAG
WORKDIR /www
COPY . /www/
RUN sed -i '4i\ \ "commitHash": "'"$DRONE_COMMIT"'",\n\ \ "tag": "'"$DRONE_TAG"'",' package.json
RUN yarn install --production \
    && yarn run build
CMD ["yarn", "start", "--", "-p", "3000"]

