# Módulo 6 — Autenticação e Segurança

Projeto Node.js + Express cobrindo as Questões Práticas do módulo: JWT,
sessões, cookies seguros, CORS, CSRF, SQL Injection (prepared statements)
e autorização baseada em roles.

## Estrutura

```
├── src/
│   ├── server.js
│   ├── config/db.js
│   ├── middlewares/
│   │   ├── authenticate.js   # valida JWT
│   │   └── authorize.js      # restringe acesso por role
│   └── routes/
│       ├── auth.js           # login (JWT + sessão + cookie), logout
│       ├── protected.js      # /admin (role), /perfil, /form (CSRF)
│       └── usuarios.js       # busca com prepared statements
├── views/form.ejs            # formulário com token CSRF
├── sql/schema.sql            # tabela usuarios com roles + dados fictícios
├── ataque-csrf-simulado.html # página externa simulando ataque CSRF
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

## Endpoints

| Método | Rota         | Descrição                                          |
|--------|--------------|-----------------------------------------------------|
| POST   | /login       | Autentica (email/senha) e retorna JWT + cookie + sessão |
| POST   | /logout      | Encerra sessão e limpa cookies                      |
| GET    | /sessao      | Retorna dados da sessão ativa                        |
| GET    | /perfil      | Rota protegida por JWT                                |
| GET    | /admin       | Rota protegida por JWT + role `admin`                |
| GET    | /form        | Formulário com token CSRF                             |
| POST   | /form        | Recebe form, valida token CSRF                        |
| GET    | /usuarios?nome=... | Busca usuários com prepared statements (anti SQL Injection) |

## Usuários fictícios (sql/schema.sql)

- `admin@exemplo.com` / `admin123` (role: admin)
- `user@exemplo.com` / `user123` (role: user)

## Testando o CSRF

1. Acesse `GET /form` em um navegador autenticado (vai gerar um token CSRF válido na sessão).
2. Abra `ataque-csrf-simulado.html` diretamente no navegador (fora da sessão/app) e clique no botão.
3. A requisição será rejeitada com `403 - Token CSRF inválido`, pois não contém o token da sessão legítima.
