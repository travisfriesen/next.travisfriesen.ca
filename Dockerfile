FROM oven/bun:1
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy all project files
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Build the application
RUN bun run build

# Expose the port from the .env file
EXPOSE 3000

# Run the app
USER bun
ENTRYPOINT [ "bun", "run", "start" ]
