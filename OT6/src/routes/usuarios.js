const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/', async (req, res) => {
  const { nome } = req.query;

  try {
    const [rows] = await pool.query(
      'SELECT id, nome, email, role FROM usuarios WHERE nome LIKE ?',
      [`%${nome || ''}%`]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
