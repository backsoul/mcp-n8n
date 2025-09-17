# Dockerfile for MCP Server
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port
EXPOSE 3001

# Set environment variable
ENV PORT=3001

# Start the server
CMD ["npm", "start"]
