FROM node:26-alpine AS base

WORKDIR /Aru
RUN npm install -g pnpm

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
ENV NODE_ENV=production
RUN pnpm install --frozen-lockfile

FROM base AS runtime
ENV NODE_ENV=production
WORKDIR /Aru
COPY --from=deps /Aru/node_modules ./node_modules
COPY . .

CMD ["pnpm", "start"]