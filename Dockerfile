FROM node:10-alpine

# Install deps on a separate layer for caching
WORKDIR /www
COPY ./package.json ./package-lock.json /www/
RUN npm i --production

# Copy source files, build and run
COPY . /www/
RUN npm run build \
    && npm prune --production
EXPOSE 3000

# Run as non-root user
USER node

CMD ["npm", "start", "--", "-p", "3000"]

