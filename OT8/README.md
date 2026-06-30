# Módulo 8 — APIs RESTful com Node.js e MySQL

API RESTful em camadas (routes, controllers, models, validators, middlewares),
cobrindo CRUD completo, validação com Joi, paginação, filtros, documentação
Swagger e logging de requisições.

## Estrutura

```
├── config/db.js                  # Conexão com o MySQL (pool)
├── controllers/usuariosController.js  # Lógica das requisições
├── middlewares/
│   ├── requestLogger.js          # Loga cada requisição (método, rota, status, tempo)
│   └── errorHandler.js           # Tratamento global de erros
├── models/usuariosModel.js       # Queries SQL, paginação e filtro por nome
├── routes/usuariosRoutes.js      # Endpoints CRUD
├── validators/usuarioSchema.js   # Schemas Joi (criação e atualização)
├── sql/schema.sql                # Criação da tabela + dados fictícios
├── swagger.json                  # Documentação OpenAPI
├── app.js                        # Arquivo principal do Express
├── docker-compose.yml
└── .env.example
```

## Como rodar

```bash
npm install
cp .env.example .env
docker-compose up -d
npm start
```

- API: `http://localhost:3000`
- Documentação Swagger: `http://localhost:3000/api-docs`

## Endpoints

| Método | Rota             | Descrição                                  |
|--------|------------------|----------------------------------------------|
| POST   | /usuarios        | Cria um usuário (validação Joi)               |
| GET    | /usuarios        | Lista usuários (paginação + filtro por nome)  |
| GET    | /usuarios/:id    | Busca um usuário pelo ID                       |
| PUT    | /usuarios/:id    | Atualiza um usuário pelo ID (validação Joi)   |
| DELETE | /usuarios/:id    | Remove um usuário pelo ID                      |

### Paginação e filtro

```
GET /usuarios?page=1&limit=10
GET /usuarios?nome=jo
```

### Exemplo de criação

```bash
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nome":"Maria Souza","email":"maria@exemplo.com","senha":"123456"}'
```

### Exemplo de erro de validação

```bash
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nome":"Jo","email":"invalido","senha":"123"}'
```

Retorna `400` com a mensagem do primeiro campo inválido detectado pelo Joi.

## Logging de requisições

Todo request passa pelo middleware `requestLogger`, que imprime no console:

```
[2026-06-30T12:00:00.000Z] GET /usuarios 200 - 12ms
```

## Usuários fictícios (sql/schema.sql)

- admin@demo.com / 123456
- user@demo.com / 123456
- joana.lima@demo.com / 123456
- joao.pedro@demo.com / 123456
- marcos.vinicius@demo.com / 123456
