FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /client

# Copy the package.json and package-lock.json files to the working directory inside the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the local directory to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "start"]
