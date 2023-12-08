# syntax=docker/dockerfile:1.4

#Argument
ARG FRONT_END_PORT=3000
ARG NODE_VERSION=18.10.0

# Create image based on the official Node image from dockerhub
FROM node:${NODE_VERSION}-alpine as base

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY ./ /usr/src/app

# Serve the app
CMD ["npm", "run", "build"]

# Run frontend app form build 
FROM nginx
EXPOSE ${FRONT_END_PORT}
COPY ./nginx/default.conf /usr/share/nginx/html 
COPY --from=base /usr/src/app/build /usr/share/nginx/html


