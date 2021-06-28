FROM node:14.17-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src
COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]
