#STAGE1
FROM node:17.4 as build-stage

#create direc
RUN mkdir /usr/src/app

#set current direc
WORKDIR /usr/src/app

#add node module to env
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#copy all file to docker direc
COPY ./ ./
COPY package.json ./
COPY /db.json ./  
COPY /src/earthoer-api_numer.json ./
#copy server to docker
COPY /server.js ./


#install  all dependencies
RUN npm i

#npm start
CMD ["node","./server.js"]

#docker build -t api_numer .
#docker run -it -p 3001:3001 api_numer