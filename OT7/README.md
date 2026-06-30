# Módulo 7 — Aplicações Avançadas com Node.js

Projeto Node.js cobrindo as Questões Práticas do módulo: async/await,
Worker Threads, Socket.io, Cluster, Child Process, PM2 e logging com Winston.

## Estrutura

```
├── src/
│   ├── server.js              # Express + Socket.io (chat em tempo real)
│   ├── logger.js              # Configuração do Winston (console + arquivo)
│   ├── async-demo.js          # async/await consumindo API externa
│   ├── worker-demo.js         # dispara o Worker Thread
│   ├── workers/primos.worker.js  # tarefa pesada executada na thread separada
│   ├── child-process-demo.js  # child_process executando comando do SO
│   └── cluster.js             # cluster usando todos os núcleos da CPU
├── public/index.html          # cliente do chat (Socket.io) + botão de tarefa pesada
├── ecosystem.config.js        # configuração do PM2
├── logs/                      # arquivos de log gerados pelo Winston
└── package.json
```

## Como rodar

```bash
npm install
npm start
```

Acesse `http://localhost:3000` para o chat em tempo real. Pelo navegador é
possível enviar mensagens (Socket.io) e também disparar uma tarefa pesada
que roda em um Worker Thread, com o resultado retornando via socket.

## Scripts disponíveis

| Comando                    | Descrição                                              |
|-----------------------------|----------------------------------------------------------|
| `npm start`                 | Sobe o servidor Express + Socket.io                       |
| `npm run async-demo`        | Executa o exemplo de async/await consumindo API externa  |
| `npm run worker-demo`       | Executa o Worker Thread isoladamente (cálculo de primos) |
| `npm run child-process-demo`| Executa um comando do sistema operacional via child_process |
| `npm run cluster`           | Sobe um servidor HTTP em modo cluster (todos os núcleos) |

## PM2

Com o PM2 instalado globalmente (`npm install -g pm2`):

```bash
pm2 start ecosystem.config.js
pm2 logs modulo7-app
pm2 monit
pm2 stop modulo7-app
```

## Logging com Winston

Todas as ações relevantes (conexões de socket, mensagens, execução de
workers, child processes) são registradas via `src/logger.js`:

- Console (saída padrão)
- `logs/app.log` (todos os níveis)
- `logs/errors.log` (apenas erros)

## Testando o cluster

```bash
npm run cluster
```

Cada requisição em `http://localhost:8000` é atendida por um worker
diferente (um por núcleo de CPU), demonstrando o balanceamento de carga.
