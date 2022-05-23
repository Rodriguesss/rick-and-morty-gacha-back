var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import characterRepository from "../repositories/character.repository.js";
import profileRepository from "../repositories/profile.repository.js";
import bannerRepository from "../repositories/banner.repository.js";
import axios from "axios";
import { badRequest } from "../utils/errorType.utils.js";
function gacha(bannerId, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var profile, filter, urlFilter, data, totalPages, pageNumber, dataWithRandomPage, characterArray, _a, characterApiId, name, image, characterReponse, character;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, profileRepository.find(userId)];
                case 1:
                    profile = _b.sent();
                    if (profile.portalWeapons <= 0) {
                        throw badRequest("Você não possui arma de portais.");
                    }
                    return [4 /*yield*/, bannerRepository.findById(bannerId)];
                case 2:
                    filter = (_b.sent()).filter;
                    urlFilter = JSON.parse(filter);
                    return [4 /*yield*/, axios.get("https://rickandmortyapi.com/api/character?".concat(urlFilter.type, "=").concat(urlFilter.value))];
                case 3:
                    data = (_b.sent()).data;
                    totalPages = data.info.pages;
                    pageNumber = random(totalPages);
                    return [4 /*yield*/, axios.get("https://rickandmortyapi.com/api/character?page=".concat(pageNumber, "&").concat(urlFilter.type, "=").concat(urlFilter.value))];
                case 4:
                    dataWithRandomPage = (_b.sent()).data;
                    characterArray = random(dataWithRandomPage.results.length);
                    _a = dataWithRandomPage.results[characterArray], characterApiId = _a.id, name = _a.name, image = _a.image;
                    return [4 /*yield*/, characterRepository.findById(characterApiId)];
                case 5:
                    characterReponse = _b.sent();
                    if (!!characterReponse) return [3 /*break*/, 7];
                    return [4 /*yield*/, characterRepository.get(characterApiId)];
                case 6:
                    characterReponse = _b.sent();
                    _b.label = 7;
                case 7: return [4 /*yield*/, profileRepository.subtractPortalWeapon(profile.id)];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, characterRepository.getCharacter(profile.id, characterReponse.id)];
                case 9:
                    _b.sent();
                    character = { name: name, path: image };
                    return [2 /*return*/, character];
            }
        });
    });
}
function random(range) {
    return Math.floor(Math.random() * range);
}
function findAllByProfileId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var profileId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, profileRepository.find(id)];
                case 1:
                    profileId = (_a.sent()).id;
                    return [4 /*yield*/, characterRepository.findProfileId(profileId)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export default {
    gacha: gacha,
    findAllByProfileId: findAllByProfileId
};
