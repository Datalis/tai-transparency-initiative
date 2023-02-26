# stage build
FROM node:lts

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
FROM node:lts

WORKDIR /usr/local/app

# copy dependency list
COPY --from=0 /usr/local/app/package*.json ./

# clean install dependencies, no devDependencies, no prepare script
RUN npm ci --production --ignore-scripts

# remove potential security issues
RUN npm audit fix

# copy built SvelteKit app to /app
COPY --from=0 /usr/local/app/build ./
ENV PORT=3002
ENV API_SERVER=https://api.transparency-initiative.org
ENV API_TOKEN=bf6e5c04b93499e1a38594ba005c5c5b3db9a0a7383c291236702b243a63b1444172f8ee6fa2c1064b50b1fb8a1631538d3591e3f9af0047050f9c4f4e3faf2b5f38d05692f9b0255dbf5e26958026553e42d0710adae7c1c4d2fb48290fa883281626fb719c16231d9b982980f484c8a42e458268e83cf7558cb108ac19d7ac
EXPOSE 3002
CMD ["node", "./index.js"]
