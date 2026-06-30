const pool = require('../db');

const listarUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM usuarios ORDER BY id DESC'
        );

        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const criarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: 'Nome e email são obrigatórios'
        });
    }

    try {
        const [result] = await pool.execute(
            'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
            [nome, email]
        );

        res.status(201).json({
            id: result.insertId,
            nome,
            email
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const atualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: 'Nome e email são obrigatórios'
        });
    }

    try {
        const [result] = await pool.execute(
            'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
            [nome, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Usuário não encontrado'
            });
        }

        res.json({
            message: 'Usuário atualizado com sucesso'
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const excluirUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.execute(
            'DELETE FROM usuarios WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Usuário não encontrado'
            });
        }

        res.json({
            message: 'Usuário excluído com sucesso'
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    excluirUsuario
};