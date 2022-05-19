import joi from "joi";

const joiLogin = {
  nickname: joi.string().min(3).max(12).required(),
  password: joi.string().min(3).max(15).required(),
};

const joiUserObject = joi.object({
  ...joiLogin,
  email: joi.string().email().required(),
});

const joiLoginObject = joi.object(joiLogin);

export { joiUserObject, joiLoginObject };
