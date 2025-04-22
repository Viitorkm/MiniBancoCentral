# API Mini Banco Central

Esta API desenvolvida em Node.js simula um sistema bancário centralizado, permitindo:

- Criação de instituições financeiras
- Cadastro de usuários
- Gerenciamento de contas bancárias
- Operações financeiras (transferências, depósitos, saques)
- Consultas de saldo e extrato

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **Docker** - Containerização da aplicação
- **Sequelize** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional

## 📂 Estrutura do Projeto

```bash
src/
├── app/
│ ├── controllers/ # Lógica de negócios
│ ├── models/ # Modelos de dados
│ ├── config/ # Configurações
│ ├── database/ # Migrações e seeds
│ ├── routes/ # Definição de rotas
│ └── services/ # Serviços auxiliares
├── server.js # Ponto de entrada
└── app.js # Configuração principal
```

## 🚀 Como Executar

### Pré-requisitos

- Docker instalado
- Node.js (v16 ou superior)

### Passo a Passo

Clone o repositório:

```bash
git clone https://github.com/Viitorkm/MiniBancoCentral
```

Inicie os containers:

```bash
docker-compose up -d
```

Execute as migrações:

```bash
npx sequelize-cli db:migrate
```

(Opcional) Popule o banco com dados iniciais:

```bash
npx sequelize-cli db:seed:all
```

Inicie a aplicação:

```bash
node src/server.js
```

A API estará disponível em http://localhost:3000

## 📚 Documentação da API
