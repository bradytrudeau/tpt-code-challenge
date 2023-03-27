# Base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Set environment variables
ENV NODE_ENV production
ENV PORT 4000

# Expose port
EXPOSE ${PORT}

# Start the server
CMD ["node", "main.js"]
