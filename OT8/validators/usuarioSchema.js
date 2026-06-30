const Joi = require('joi');

const criarUsuarioSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(),
});

const atualizarUsuarioSchema = Joi.object({
  nome: Joi.string().min(3),
  email: Joi.string().email(),
  senha: Joi.string().min(6),
}).min(1);

module.exports = {
  criarUsuarioSchema,
  atualizarUsuarioSchema,
};
