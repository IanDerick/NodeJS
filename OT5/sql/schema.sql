CREATE DATABASE IF NOT EXISTS modulo5_db;
USE modulo5_db;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dados de exemplo
INSERT INTO usuarios (nome, email) VALUES
  ('Ana Silva', 'ana.silva@exemplo.com'),
  ('Bruno Costa', 'bruno.costa@exemplo.com'),
  ('Carla Souza', 'carla.souza@exemplo.com');
