# stage build
FROM node:lts-alpine as base

FROM base as builder

WORKDIR /usr/local/app

# copy everything to the container
COPY . .

# clean install all dependencies
RUN npm i

# remove potential security issues
RUN npm audit fix

# build SvelteKit app
RUN npm run build


# stage run
FROM base as runner

WORKDIR /usr/local/app

# copy dependency list
COPY --from=builder /usr/local/app/package*.json ./

# clean install dependencies, no devDependencies, no prepare script
RUN npm ci --production --ignore-scripts

# remove potential security issues
RUN npm audit fix

# copy built SvelteKit app to /app
COPY --from=builder /usr/local/app/build ./
ENV PORT=3002
ENV API_SERVER=https://api.transparency-initiative.org
ENV API_TOKEN=bf6e5c04b93499e1a38594ba005c5c5b3db9a0a7383c291236702b243a63b1444172f8ee6fa2c1064b50b1fb8a1631538d3591e3f9af0047050f9c4f4e3faf2b5f38d05692f9b0255dbf5e26958026553e42d0710adae7c1c4d2fb48290fa883281626fb719c16231d9b982980f484c8a42e458268e83cf7558cb108ac19d7ac
ENV PUBLIC_FIREBASE_API_KEY=AIzaSyDDRHEv2Y1OoJ2jiOpXvNgHXYX3XsfCj08
ENV PUBLIC_FIREBASE_AUTH_DOMAIN=transparency-cd0a3.firebaseapp.com
ENV PUBLIC_FIREBASE_PROJECT_ID=transparency-cd0a3
ENV PUBLIC_FIREBASE_STORAGE_BUCKET=transparency-cd0a3.appspot.com
ENV PUBLIC_FIREBASE_MESSAGING_SENDER_ID=744067165946
ENV PUBLIC_FIREBASE_APP_ID=1:744067165946:web:26d45096b1b40af712a343
EXPOSE 3002
CMD ["node", "./index.js"]
