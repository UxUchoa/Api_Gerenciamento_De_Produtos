# 📚 Documentação da API - Sistema de Gestão de Produtos

## 🔗 Base URL
```
http://localhost:3000
```

## 📋 Endpoints da API

### 1. Criar Produto

**POST** `/products`

Cria um novo produto no sistema.

#### Request Body
```json
{
  "name": "string (obrigatório, min 3 caracteres)",
  "description": "string (opcional)",
  "price": "number (obrigatório, positivo)",
  "stock": "number (obrigatório)"
}
```

#### Exemplo de Request
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Smartphone Samsung Galaxy S23",
    "description": "Smartphone de última geração com câmera de 108MP",
    "price": 4299.99,
    "stock": 25
  }'
```

#### Response (201 Created)
```json
{
  "id": 1,
  "name": "Smartphone Samsung Galaxy S23",
  "description": "Smartphone de última geração com câmera de 108MP",
  "price": "4299.99",
  "stock": 25,
  "createdAt": "2025-07-28T21:30:00.000Z",
  "updatedAt": "2025-07-28T21:30:00.000Z"
}
```

#### Erros Possíveis
- **400 Bad Request**: Dados inválidos
- **409 Conflict**: Nome do produto já existe

---

### 2. Listar Todos os Produtos

**GET** `/products`

Retorna todos os produtos cadastrados.

#### Request
```bash
curl http://localhost:3000/products
```

#### Response (200 OK)
```json
[
  {
    "id": 1,
    "name": "Smartphone Samsung Galaxy S23",
    "description": "Smartphone de última geração com câmera de 108MP",
    "price": "4299.99",
    "stock": 25,
    "createdAt": "2025-07-28T21:30:00.000Z",
    "updatedAt": "2025-07-28T21:30:00.000Z"
  },
  {
    "id": 2,
    "name": "Notebook Dell Inspiron",
    "description": "Notebook para trabalho e estudos",
    "price": "2899.99",
    "stock": 15,
    "createdAt": "2025-07-28T21:35:00.000Z",
    "updatedAt": "2025-07-28T21:35:00.000Z"
  }
]
```

---

### 3. Buscar Produto por ID

**GET** `/products/{id}`

Retorna um produto específico pelo ID.

#### Parâmetros
- `id` (number): ID do produto

#### Request
```bash
curl http://localhost:3000/products/1
```

#### Response (200 OK)
```json
{
  "id": 1,
  "name": "Smartphone Samsung Galaxy S23",
  "description": "Smartphone de última geração com câmera de 108MP",
  "price": "4299.99",
  "stock": 25,
  "createdAt": "2025-07-28T21:30:00.000Z",
  "updatedAt": "2025-07-28T21:30:00.000Z"
}
```

#### Erros Possíveis
- **404 Not Found**: Produto não encontrado

---

### 4. Atualizar Produto

**PATCH** `/products/{id}`

Atualiza um produto existente.

#### Parâmetros
- `id` (number): ID do produto

#### Request Body
```json
{
  "name": "string (opcional, min 3 caracteres)",
  "description": "string (opcional)",
  "price": "number (opcional, positivo)",
  "stock": "number (opcional)"
}
```

#### Exemplo de Request
```bash
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 3999.99,
    "stock": 20
  }'
```

#### Response (200 OK)
```json
{
  "id": 1,
  "name": "Smartphone Samsung Galaxy S23",
  "description": "Smartphone de última geração com câmera de 108MP",
  "price": "3999.99",
  "stock": 20,
  "createdAt": "2025-07-28T21:30:00.000Z",
  "updatedAt": "2025-07-28T21:45:00.000Z"
}
```

#### Erros Possíveis
- **400 Bad Request**: Dados inválidos
- **404 Not Found**: Produto não encontrado
- **409 Conflict**: Nome do produto já existe

---

### 5. Excluir Produto

**DELETE** `/products/{id}`

Remove um produto do sistema.

#### Parâmetros
- `id` (number): ID do produto

#### Request
```bash
curl -X DELETE http://localhost:3000/products/1
```

#### Response (200 OK)
```json
{
  "id": 1,
  "name": "Smartphone Samsung Galaxy S23",
  "description": "Smartphone de última geração com câmera de 108MP",
  "price": "3999.99",
  "stock": 20,
  "createdAt": "2025-07-28T21:30:00.000Z",
  "updatedAt": "2025-07-28T21:45:00.000Z"
}
```

#### Erros Possíveis
- **404 Not Found**: Produto não encontrado

---

## 📊 Códigos de Status HTTP

| Código | Descrição | Uso |
|--------|-----------|-----|
| 200 | OK | Requisição bem-sucedida |
| 201 | Created | Produto criado com sucesso |
| 400 | Bad Request | Dados inválidos na requisição |
| 404 | Not Found | Produto não encontrado |
| 409 | Conflict | Conflito (ex: nome duplicado) |
| 500 | Internal Server Error | Erro interno do servidor |

---

## 🔍 Validações

### Campos Obrigatórios
- `name`: String com mínimo de 3 caracteres
- `price`: Número positivo
- `stock`: Número

### Campos Opcionais
- `description`: String

### Regras de Negócio
- Nome do produto deve ser único
- Preço deve ser positivo
- Estoque deve ser um número válido

---

## 📝 Exemplos de Uso

### Fluxo Completo de CRUD

#### 1. Criar Produto
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mouse Gamer RGB",
    "description": "Mouse gamer com 6 botões e RGB customizável",
    "price": 89.99,
    "stock": 100
  }'
```

#### 2. Listar Produtos
```bash
curl http://localhost:3000/products
```

#### 3. Buscar Produto Específico
```bash
curl http://localhost:3000/products/1
```

#### 4. Atualizar Produto
```bash
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 79.99,
    "stock": 85
  }'
```

#### 5. Excluir Produto
```bash
curl -X DELETE http://localhost:3000/products/1
```

---

## 🛠️ Testando com Postman

### Collection JSON
```json
{
  "info": {
    "name": "Sistema de Gestão de Produtos",
    "description": "API para gerenciamento de produtos"
  },
  "item": [
    {
      "name": "Criar Produto",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": "http://localhost:3000/products",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Produto Teste\",\n  \"description\": \"Descrição do produto\",\n  \"price\": 99.99,\n  \"stock\": 50\n}"
        }
      }
    },
    {
      "name": "Listar Produtos",
      "request": {
        "method": "GET",
        "url": "http://localhost:3000/products"
      }
    },
    {
      "name": "Buscar Produto",
      "request": {
        "method": "GET",
        "url": "http://localhost:3000/products/1"
      }
    },
    {
      "name": "Atualizar Produto",
      "request": {
        "method": "PATCH",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": "http://localhost:3000/products/1",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"price\": 89.99,\n  \"stock\": 45\n}"
        }
      }
    },
    {
      "name": "Excluir Produto",
      "request": {
        "method": "DELETE",
        "url": "http://localhost:3000/products/1"
      }
    }
  ]
}
```

---

## 🔧 Headers Necessários

Para requisições que enviam dados (POST, PATCH):
```
Content-Type: application/json
```

---

## 📈 Monitoramento

### Logs Disponíveis
- Logs de conexão com banco de dados
- Logs de queries SQL (em desenvolvimento)
- Logs de erros com stack trace
- Logs de validação de dados

### Métricas Sugeridas
- Tempo de resposta das requisições
- Taxa de sucesso/erro
- Número de produtos criados/atualizados/excluídos
- Uso de memória e CPU

---

## 🔒 Segurança

### Recomendações
- Implementar autenticação JWT
- Adicionar rate limiting
- Validar entrada de dados
- Usar HTTPS em produção
- Implementar CORS adequadamente

---

## 📞 Suporte

Para dúvidas sobre a API:
- Abra uma issue no repositório
- Consulte a documentação do NestJS
- Verifique os logs da aplicação

---

**Documentação gerada automaticamente - Sistema de Gestão de Produtos v1.0.0** 