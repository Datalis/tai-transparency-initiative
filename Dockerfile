# stage build
FROM node:iron-slim as base
RUN apt update
RUN apt install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev libvips-dev -y

FROM base as builder
WORKDIR /usr/local/app
COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm
# Fuerza desde cero:
RUN pnpm install --frozen-lockfile
COPY . .
# Reconstruye explícitamente cada módulo nativo
RUN pnpm exec npm rebuild sharp
RUN pnpm exec npm rebuild canvas
RUN pnpm build

FROM base as runner
WORKDIR /usr/local/app
COPY ./package.json ./
RUN npm install -g pnpm
RUN pnpm install --prod
# Reconstruye explícitamente cada módulo nativo
RUN pnpm exec npm rebuild sharp
RUN pnpm exec npm rebuild canvas
COPY --from=builder /usr/local/app/build ./
EXPOSE 3002
ENV PORT 3002
ENV HOSTNAME "0.0.0.0"
CMD ["node", "./index.js"]

