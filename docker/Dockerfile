FROM node:20-alpine AS builder
WORKDIR /app
COPY app/package.json ./
COPY app/ ./

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
USER node
COPY --chown=node:node --from=builder /app ./
EXPOSE 3000
CMD ["node", "index.js"]