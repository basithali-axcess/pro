# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/ap./demo

# Copy package.json and package-lock.json to the working directory

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD [ "node", "app.js" ]

