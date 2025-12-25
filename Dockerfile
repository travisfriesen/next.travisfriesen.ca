# Build stage
FROM oven/bun:1.3.3 AS builder
WORKDIR /usr/src/app

# Copy only package files first to leverage caching
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy only necessary files for build

COPY tsconfig.json next.config.mjs postcss.config.mjs tailwind.config.ts ./
COPY src/ ./src/
COPY public/ ./public/

# Set environment to production and build
ENV NODE_ENV=production
RUN bun run build

# Production stage
FROM oven/bun:1.3.3-slim AS production
WORKDIR /usr/src/app

# Copy the standalone output and static files
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/public ./public

# Make cache folder and give bun ownership
RUN mkdir -p /usr/src/app/.next/cache &&  \
    chown -R bun:bun /usr/src/app

# Expose port and run the standalone server
EXPOSE 3000
USER bun
ENV NODE_ENV=production
CMD ["bun", "run", "server.js"]
