FROM node:latest

# install simple http server for serving static content
RUN npm install -g @vue/cli

#RUN vue create pos

#RUN vue add @vue/pwa

# make the 'code' folder the current working directory
WORKDIR /code

# copy both 'package.json' and 'package-lock.json' (if available)
#COPY package*.json ./


# install project dependencies
#RUN npm install

# build app for production with minification
#RUN npm run build

EXPOSE 8080