# Bot Full Stack para Telegram

Aplicação full stack para automação de interações pelo Telegram, com painel administrativo em Vue, API Node.js e persistência em MySQL.

## Arquitetura

- **Front-end:** Vue 3, Vue Router, Vuex e Socket.IO Client
- **Back-end:** Node.js, Express, Sequelize, JWT e integrações com Telegram
- **Banco de dados:** MySQL 8
- **Infraestrutura local:** Docker Compose

## Funcionalidades

- autenticação de usuários;
- envio e recebimento de mensagens;
- integração com a API do Telegram;
- comunicação em tempo real com Socket.IO;
- separação entre interface, API e banco de dados;
- ambiente local reproduzível com containers.

## Segurança

Nenhum segredo deve ser versionado. Antes de executar o projeto:

1. copie `.env.example` para `.env`;
2. preencha credenciais locais;
3. gere um segredo JWT forte;
4. use um token novo fornecido pelo BotFather.

> Se um token ou senha já foi publicado no histórico do Git, revogue-o e gere outro. Remover o valor do arquivo atual não invalida credenciais antigas.

## Executando com Docker

Pré-requisitos: Docker e Docker Compose.

```bash
cp .env.example .env
docker compose up --build
```

Serviços padrão:

- painel: `http://localhost:8080`
- API: `http://localhost:3000`
- MySQL exposto localmente na porta `3307`

## Executando sem Docker

### API

```bash
cd backend
npm install
npm run db:setup
npm run dev
```

### Painel

```bash
cd frontend
npm install
npm run start
```

## Estrutura

```text
.
├── backend/             # API, modelos, migrações e serviços
├── frontend/            # painel administrativo Vue
├── docker-compose.yaml  # orquestração local
└── .env.example         # referência de configuração
```

## Scripts da API

- `npm start`: inicia a API sem alterar o banco;
- `npm run dev`: inicia com recarga automática;
- `npm run db:setup`: cria, migra e popula o banco;
- `npm run db:reset`: recria o banco de forma explícita;
- `npm test`: executa os testes nativos do Node.

## Autor

Desenvolvido por [André Luis](https://github.com/andre09999).
