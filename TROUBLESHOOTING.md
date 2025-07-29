# 🔧 Guia de Troubleshooting - Sistema de Gestão de Produtos

## 🚨 Problemas Comuns e Soluções

### 1. Erro de Conexão com Banco de Dados

#### Problema
```
ERROR [TypeOrmModule] Unable to connect to the database
error: password authentication failed for user "postgres"
```

#### Soluções

**1.1 Verificar se o container está rodando**
```bash
docker compose ps
```

**1.2 Verificar as credenciais no .env**
```bash
cat .env
```
Certifique-se que as credenciais estão corretas:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=asdfgh08
DB_NAME=crud_db
```

**1.3 Recriar o container**
```bash
docker compose down -v
docker compose up -d
```

**1.4 Testar conexão manual**
```bash
docker exec -it manager-db-1 psql -U postgres -d crud_db -c "SELECT current_user;"
```

---

### 2. Erro de Sintaxe TypeScript

#### Problema
```
SyntaxError: Invalid or unexpected token
```

#### Soluções

**2.1 Verificar encoding dos arquivos**
- Certifique-se que os arquivos estão salvos em UTF-8
- Remova caracteres especiais desnecessários

**2.2 Verificar dependências**
```bash
npm install
npm install class-validator class-transformer
```

**2.3 Limpar cache**
```bash
rm -rf node_modules
rm -rf dist
npm install
```

---

### 3. Erro de Porta Já em Uso

#### Problema
```
Bind for 0.0.0.0:5432 failed: port is already allocated
```

#### Soluções

**3.1 Verificar processos usando a porta**
```bash
netstat -ano | findstr :5432
```

**3.2 Parar PostgreSQL local**
```bash
# Windows
net stop postgresql

# Ou parar o processo
taskkill /PID <PID> /F
```

**3.3 Usar porta diferente**
Alterar no `docker-compose.yml`:
```yaml
ports:
  - "5433:5432"
```

---

### 4. Erro de Validação

#### Problema
```
Validation failed
```

#### Soluções

**4.1 Verificar dados enviados**
- Nome deve ter mínimo 3 caracteres
- Preço deve ser positivo
- Estoque deve ser número válido

**4.2 Verificar DTOs**
```typescript
// create-product.dto.ts
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  
  @IsString()
  description?: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  stock: number;
}
```

---

### 5. Erro de Entidade Não Encontrada

#### Problema
```
Entity "Product" was not found
```

#### Soluções

**5.1 Verificar import da entidade**
```typescript
// products.module.ts
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  // ...
})
```

**5.2 Verificar configuração do TypeORM**
```typescript
// app.module.ts
TypeOrmModule.forRoot({
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
})
```

---

### 6. Erro de Método PATCH Não Atualiza

#### Problema
O método PATCH não atualiza os dados no banco.

#### Solução

**6.1 Verificar método update no service**
```typescript
async update(id: number, updateProductDto: UpdateProductDto) {
  const product = await this.productRepository.preload({
    id,
    ...updateProductDto,
  });
  if (!product) {
    throw new NotFoundException(`Product with id ${id} not found`);
  }
  return await this.productRepository.save(product); // ← IMPORTANTE!
}
```

---

### 7. Erro de Docker Compose

#### Problema
```
additional properties 'db' not allowed
```

#### Solução

**7.1 Verificar estrutura do docker-compose.yml**
```yaml
version: '3.8'
services:  # ← IMPORTANTE!
  db:
    image: postgres:14.1-alpine
    # ...
```

---

### 8. Erro de Aplicação Não Inicia

#### Problema
```
Failed to connect to server
```

#### Soluções

**8.1 Verificar se o banco está pronto**
```bash
docker compose logs db
```

**8.2 Aguardar inicialização**
```bash
# Aguardar 10-15 segundos após subir o container
sleep 15
npm run start:dev
```

**8.3 Verificar logs da aplicação**
```bash
npm run start:dev
# Observar logs de erro
```

---

### 9. Erro de Dependências

#### Problema
```
Cannot find module 'class-validator'
```

#### Solução

**9.1 Instalar dependências**
```bash
npm install class-validator class-transformer
```

**9.2 Verificar package.json**
```json
{
  "dependencies": {
    "class-validator": "^0.14.0",
    "class-transformer": "^0.5.1"
  }
}
```

---

### 10. Erro de CORS

#### Problema
```
Access to fetch at 'http://localhost:3000/products' from origin 'http://localhost:3001' has been blocked by CORS policy
```

#### Solução

**10.1 Configurar CORS no main.ts**
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: true, // ou especificar domínios
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  await app.listen(3000);
}
bootstrap();
```

---

## 🔍 Comandos de Diagnóstico

### Verificar Status dos Serviços
```bash
# Status do Docker
docker compose ps

# Status do banco
docker exec -it manager-db-1 psql -U postgres -d crud_db -c "SELECT version();"

# Status da aplicação
curl http://localhost:3000
```

### Verificar Logs
```bash
# Logs do Docker
docker compose logs

# Logs da aplicação
npm run start:dev

# Logs específicos do banco
docker compose logs db
```

### Verificar Configurações
```bash
# Verificar .env
cat .env

# Verificar package.json
cat package.json

# Verificar docker-compose.yml
cat docker-compose.yml
```

---

## 🛠️ Scripts de Recuperação

### Reset Completo
```bash
# Parar tudo
docker compose down -v
taskkill /F /IM node.exe

# Limpar cache
rm -rf node_modules
rm -rf dist

# Reinstalar
npm install

# Subir banco
docker compose up -d

# Aguardar e iniciar app
sleep 10
npm run start:dev
```

### Reset do Banco
```bash
# Parar e remover volumes
docker compose down -v

# Recriar banco
docker compose up -d

# Verificar
docker exec -it manager-db-1 psql -U postgres -d crud_db -c "\dt"
```

---

## 📞 Suporte Adicional

### Logs Importantes
- **Aplicação**: Console onde roda `npm run start:dev`
- **Docker**: `docker compose logs`
- **Banco**: `docker compose logs db`

### Informações Úteis
- **Versão Node.js**: `node --version`
- **Versão npm**: `npm --version`
- **Versão Docker**: `docker --version`
- **Versão Docker Compose**: `docker compose version`

### Recursos Externos
- [Documentação NestJS](https://docs.nestjs.com/)
- [Documentação TypeORM](https://typeorm.io/)
- [Documentação PostgreSQL](https://www.postgresql.org/docs/)
- [Documentação Docker](https://docs.docker.com/)

---

## ✅ Checklist de Verificação

Antes de reportar um problema, verifique:

- [ ] Docker está rodando
- [ ] Container do banco está ativo
- [ ] Arquivo .env está configurado
- [ ] Dependências estão instaladas
- [ ] Porta 3000 está livre
- [ ] Porta 5432 está livre (ou configurada)
- [ ] Logs não mostram erros críticos
- [ ] Aplicação inicia sem erros de sintaxe

---

**Última atualização: v1.0.0 - Sistema de Gestão de Produtos** 