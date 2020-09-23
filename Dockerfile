### STAGE 1: Build ###
FROM node AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx
COPY default.conf /etc/nginx/default.conf
COPY --from=build /usr/src/app/dist/booksweb-client /usr/share/nginx/html
EXPOSE 80