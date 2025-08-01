# Use Node.js base image
FROM node:20

# Create app directory
WORKDIR /app

# Copy only package.json and package-lock.json first (if available)
COPY package*.json ./

# Install dependencies inside the container (not from your local system)
RUN npm install

# Copy the rest of the backend code
COPY . .

# Exclude node_modules via .dockerignore to avoid invalid ELF errors
# (ensure .dockerignore exists separately)

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
