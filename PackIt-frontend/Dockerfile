# Use the Node.js base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . .

# Install dependencies
RUN npm ci

# Build the application with Vite
RUN npm run build

# Use the Nginx base image for the production stage
FROM nginx:stable-alpine

# Copy the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]