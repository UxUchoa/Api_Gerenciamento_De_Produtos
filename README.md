<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🛍️ Sistema de Gestão de Produtos

Sistema completo de CRUD (Create, Read, Update, Delete) para gestão de produtos desenvolvido com NestJS, TypeORM e PostgreSQL.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [API Endpoints](#api-endpoints)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Banco de Dados](#banco-de-dados)
- [Testes](#testes)
- [Deploy](#deploy)
- [Contribuição](#contribuição)

## 🎯 Visão Geral

Este projeto é um sistema de gestão de produtos que permite:

- ✅ Criar novos produtos
- ✅ Listar todos os produtos
- ✅ Buscar produto por ID
- ✅ Atualizar produtos existentes
- ✅ Excluir produtos
- ✅ Validação de dados
- ✅ Persistência em banco PostgreSQL

## 🛠️ Tecnologias Utilizadas

### Backend
- **NestJS** - Framework Node.js para construção de aplicações escaláveis
- **TypeScript** - Linguagem de programação tipada
- **TypeORM** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização da aplicação
- **class-validator** - Validação de dados

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para código JavaScript/TypeScript
- **Prettier** - Formatador de código
- **Jest** - Framework de testes

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Docker** e **Docker Compose**
- **Git**

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd gestão/manager
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie o arquivo .env na raiz do projeto
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=asdfgh08
DB_NAME=crud_db
```

## ⚙️ Configuração

### Banco de Dados

O projeto usa PostgreSQL via Docker. Para configurar:

1. **Suba o container do banco**
```bash
docker compose up -d
```

2. **Verifique se o banco está rodando**
```bash
docker compose ps
```

### Configuração do TypeORM

O TypeORM está configurado para:
- Conectar automaticamente ao PostgreSQL
- Sincronizar o schema automaticamente (apenas em desenvolvimento)
- Carregar entidades automaticamente
- Logging de queries habilitado

## ▶️ Executando o Projeto

### Modo Desenvolvimento
```bash
npm run start:dev
```

### Modo Produção
```bash
npm run build
npm run start:prod
```

### Modo Debug
```bash
npm run start:debug
```

## 🔌 API Endpoints

### Produtos

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `POST` | `/products` | Criar novo produto | `CreateProductDto` |
| `GET` | `/products` | Listar todos os produtos | - |
| `GET` | `/products/:id` | Buscar produto por ID | - |
| `PATCH` | `/products/:id` | Atualizar produto | `UpdateProductDto` |
| `DELETE` | `/products/:id` | Excluir produto | - |

### Exemplos de Uso

#### Criar Produto
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Smartphone XYZ",
    "description": "Smartphone de última geração",
    "price": 1299.99,
    "stock": 50
  }'
```

#### Listar Produtos
```bash
curl http://localhost:3000/products
```

#### Buscar Produto por ID
```bash
curl http://localhost:3000/products/1
```

#### Atualizar Produto
```bash
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 1199.99,
    "stock": 45
  }'
```

#### Excluir Produto
```bash
curl -X DELETE http://localhost:3000/products/1
```

## 📁 Estrutura do Projeto

```
src/
├── app.module.ts              # Módulo principal da aplicação
├── main.ts                    # Ponto de entrada da aplicação
├── app.controller.ts          # Controller principal
├── app.service.ts             # Service principal
└── products/                  # Módulo de produtos
    ├── products.module.ts     # Módulo de produtos
    ├── products.controller.ts # Controller de produtos
    ├── products.service.ts    # Service de produtos
    ├── entities/              # Entidades do banco
    │   └── product.entity.ts  # Entidade Product
    └── dto/                   # Data Transfer Objects
        ├── create-product.dto.ts
        └── update-product.dto.ts
```

## 🗄️ Banco de Dados

### Entidade Product

```typescript
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Schema do Banco

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | SERIAL | Chave primária auto-incremento |
| `name` | VARCHAR(255) | Nome do produto (único) |
| `description` | TEXT | Descrição do produto (opcional) |
| `price` | DECIMAL(10,2) | Preço do produto |
| `stock` | INTEGER | Quantidade em estoque |
| `createdAt` | TIMESTAMP | Data de criação |
| `updatedAt` | TIMESTAMP | Data de última atualização |

## 🧪 Testes

### Executar Testes Unitários
```bash
npm run test
```

### Executar Testes em Modo Watch
```bash
npm run test:watch
```

### Executar Testes de Cobertura
```bash
npm run test:cov
```

### Executar Testes E2E
```bash
npm run test:e2e
```

## 🚀 Deploy

### Docker

1. **Build da imagem**
```bash
docker build -t gestao-produtos .
```

2. **Executar container**
```bash
docker run -p 3000:3000 gestao-produtos
```

### Docker Compose (Produção)

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
      - DB_PORT=5432
      - DB_USER=postgres
      - DB_PASSWORD=asdfgh08
      - DB_NAME=crud_db
    depends_on:
      - db
  
  db:
    image: postgres:14.1-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: asdfgh08
      POSTGRES_DB: crud_db
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build` | Compila o projeto |
| `npm run format` | Formata o código com Prettier |
| `npm run start` | Inicia a aplicação |
| `npm run start:dev` | Inicia em modo desenvolvimento |
| `npm run start:debug` | Inicia em modo debug |
| `npm run start:prod` | Inicia em modo produção |
| `npm run lint` | Executa o linter |
| `npm run test` | Executa os testes |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run test:cov` | Executa testes com cobertura |
| `npm run test:e2e` | Executa testes end-to-end |

## 📝 Validações

### CreateProductDto
- `name`: String obrigatório, mínimo 3 caracteres
- `description`: String opcional
- `price`: Número positivo obrigatório
- `stock`: Número obrigatório

### UpdateProductDto
- Todos os campos são opcionais
- Herda as validações do CreateProductDto

## 🔍 Logs e Debug

O projeto inclui:
- Logs detalhados de conexão com banco
- Logs de queries SQL (em desenvolvimento)
- Tratamento de erros com mensagens descritivas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🔄 Changelog

### v1.0.0
- ✅ CRUD completo de produtos
- ✅ Validação de dados
- ✅ Integração com PostgreSQL
- ✅ Documentação completa
- ✅ Configuração Docker

---

**Desenvolvido com ❤️ usando NestJS**
