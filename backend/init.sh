#!/bin/bash
npm run dev
npm install -g sequelize-cli
npx sequelize db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
