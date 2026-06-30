CREATE DATABASE IF NOT EXISTS modulo8_db;
USE modulo8_db;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (nome, email, senha) VALUES
  ('Admin', 'admin@demo.com', '123456'),
  ('User', 'user@demo.com', '123456'),
  ('Joana Lima', 'joana.lima@demo.com', '123456'),
  ('João Pedro', 'joao.pedro@demo.com', '123456'),
  ('Marcos Vinicius', 'marcos.vinicius@demo.com', '123456');
