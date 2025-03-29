# Use a Node.js image with a version compatible with Expo
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install -g expo-cli && npm install

# Copy the rest of the project files
COPY . .

# Expose the ports used by Expo (19000 for Metro Bundler, 19001 for WebSockets, 19002 for Expo DevTools)
EXPOSE 19000 19001 19002

# Start the Expo server
CMD ["npx", "expo", "start", "--tunnel"]
