CREATE DATABASE IF NOT EXISTS modulo6_db;
USE modulo6_db;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  senha VARCHAR(60) NOT NULL,
  role ENUM('admin','user') NOT NULL DEFAULT 'user'
);

INSERT INTO usuarios (nome, email, senha, role) VALUES
  ('Administrador', 'admin@exemplo.com', '$2b$10$QlafWmVrmCf/Op9YCYqTquLenaZnen7u84z1S7yP2PMtIKLt746bG', 'admin'),
  ('Usuario Comum', 'user@exemplo.com', '$2b$10$.cgUmZ9DdDqBrKf2kqffLOi2yU3vThCQvT4rSjVg8mgHWZ7uvFu6W', 'user');

-- Senha de admin@exemplo.com: admin123
-- Senha de user@exemplo.com: user123
