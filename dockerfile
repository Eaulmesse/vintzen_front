# Étape 1: Construire l'application React
FROM node:18-alpine AS build
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

# Copier les fichiers sources et construire l'application
COPY . /app
RUN npm run build

# Étape 2: Servir les fichiers statiques avec Caddy
FROM caddy:2
COPY --from=build /app/dist /usr/share/caddy/landing
