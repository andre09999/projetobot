# Use uma imagem base que tenha o Node.js e npm instalados
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install
EXPOSE 8080

# Copie o restante dos arquivos do projeto
COPY . .

# Adicione o comando para iniciar sua aplicação
CMD ["npm", "start"]