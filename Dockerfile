FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:18 AS production
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist
EXPOSE 5173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]
