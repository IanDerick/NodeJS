const pool = require('../config/db');

async function criar({ nome, email, senha }) {
  const [result] = await pool.execute(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );
  return { id: result.insertId, nome, email };
}

async function listar({ page = 1, limit = 10, nome }) {
  const p = Math.max(parseInt(page, 10) || 1, 1);
  const l = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100);
  const offset = (p - 1) * l;

  const where = nome ? 'WHERE nome LIKE ?' : '';
  const params = [];

  if (nome) params.push(`%${nome}%`);
  params.push(l, offset);

  const [rows] = await pool.execute(
    `SELECT id, nome, email FROM usuarios ${where} ORDER BY id DESC LIMIT ? OFFSET ?`,
    params
  );

  const countParams = nome ? [`%${nome}%`] : [];
  const [[{ total }]] = await pool.execute(
    `SELECT COUNT(*) AS total FROM usuarios ${where}`,
    countParams
  );

  return { page: p, limit: l, total, results: rows };
}

async function buscarPorId(id) {
  const [rows] = await pool.execute(
    'SELECT id, nome, email FROM usuarios WHERE id = ?',
    [id]
  );
  return rows[0] || null;
}

async function atualizar(id, dados) {
  const campos = Object.keys(dados);
  if (campos.length === 0) return false;

  const sets = campos.map((campo) => `${campo} = ?`).join(', ');
  const valores = campos.map((campo) => dados[campo]);

  const [result] = await pool.execute(
    `UPDATE usuarios SET ${sets} WHERE id = ?`,
    [...valores, id]
  );

  return result.affectedRows > 0;
}

async function remover(id) {
  const [result] = await pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  atualizar,
  remover,
};
