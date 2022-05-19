import joi from "joi";

const joiUserObject = joi.object({
  email: joi.string().email().required(),
  nickname: joi.string().min(3).max(12).required(),
  password: joi.string().min(3).max(15).required(),
});

export { joiUserObject };
