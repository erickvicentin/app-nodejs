FROM node:12
WORKDIR /appnodejs
ADD . /appnodejs
RUN npm install
EXPOSE 3001
CMD npm start