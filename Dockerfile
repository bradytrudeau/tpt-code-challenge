# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose a port for the server to listen on
EXPOSE 4000

# Start the server
CMD ["node", "server/graphql/index.js"]
