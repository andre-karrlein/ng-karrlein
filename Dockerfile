FROM node:14 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json /app/

RUN npm install
RUN npm install -g @angular/cli

COPY . /app

RUN ng build --output-path=dist

FROM nginx:1.19-alpine

COPY --from=build /app/dist /usr/share/nginx/html
