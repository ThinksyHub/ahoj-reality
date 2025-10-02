# Use an official Node image (alpine = lightweight)
FROM node:24-alpine

# Set work directory inside container
WORKDIR /app

# Copy package.json + package-lock.json first
COPY package*.json ./

# Install only dependencies
RUN npm install

# Copy the rest of your project
COPY . .

# The serve package runs by default on 3000,
# but you can change with: serve -l <port>
ENV PORT=8080
EXPOSE 8080

# Run your start script ("serve src")
CMD ["npm", "run", "dev:all"]