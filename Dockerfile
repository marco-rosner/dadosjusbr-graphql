FROM node:alpine

WORKDIR /usr/app

# Copying project files
COPY ./ /usr/app/

# Installing packages
RUN npm install

# GraphQL port
EXPOSE 4000

# Npm start command
CMD ["npm", "start"]