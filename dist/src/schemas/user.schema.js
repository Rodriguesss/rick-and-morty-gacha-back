var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import joi from "joi";
var joiLogin = {
    nickname: joi.string().min(3).max(12).required(),
    password: joi.string().min(3).max(15).required()
};
var joiUserObject = joi.object(__assign(__assign({}, joiLogin), { email: joi.string().email().required() }));
var joiLoginObject = joi.object(joiLogin);
export { joiUserObject, joiLoginObject };
