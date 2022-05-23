import joi from "joi";

const joiLogin = {
  nickname: joi.string().min(3).max(12).required().messages({
    "string.base": `"nickname" deve ser um tipo de 'texto'`,
    "string.min": `"nickname" deve ter um comprimento mínimo de 3`,
    "string.max": `"nickname" deve ter um comprimento maximo de 12`,
    "string.empty": `"nickname" não pode ser um campo vazio`,
    "any.required": `"nickname" é obrigatorio.`,
  }),
  password: joi.string().min(3).max(15).required().messages({
    "string.base": `"senha" deve ser um tipo de 'texto'`,
    "string.min": `"senha" deve ter um comprimento mínimo de 3`,
    "string.max": `"senha" deve ter um comprimento maximo de 15`,
    "string.empty": `"senha" não pode ser um campo vazio`,
    "any.required": `"senha" é obrigatorio.`,
  }),
};

const joiUserObject = joi.object({
  ...joiLogin,
  email: joi.string().email().required().messages({
    "string.base": `"email" deve ser um tipo de 'texto'`,
    "string.empty": `"email" não pode ser um campo vazio`,
    "any.required": `"email" é obrigatorio.`,
  }),
});

const joiLoginObject = joi.object(joiLogin);

export { joiUserObject, joiLoginObject };
