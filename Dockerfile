FROM node:18-alpine as deps
ARG BUILD_ENV=develop
USER node
WORKDIR /home/node
COPY --chown=node:node . .
RUN npm ci 

FROM node:18-alpine as builder
ARG BUILD_ENV=develop
USER node
WORKDIR /home/node
COPY --chown=node:node --from=deps /home/node/ ./
RUN npm run format && npm run build:${BUILD_ENV} && npm prune --production

FROM node:18-alpine
ARG BUILD_ENV=develop
ENV BUILD_ENV ${BUILD_ENV}
USER node
WORKDIR /home/node
COPY --from=builder --chown=node:node /home/node/.next ./.next
COPY --from=builder --chown=node:node /home/node/public ./public
COPY --from=builder --chown=node:node /home/node/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/package.json ./

CMD ["npm", "run", "start"]