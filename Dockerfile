FROM node:12
WORKDIR /appnodejs
ADD . /appnodejs
RUN npm install
EXPOSE 5000
CMD npm run dev