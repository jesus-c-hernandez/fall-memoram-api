"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllScores = exports.postScore = void 0;
const utils_1 = require("../utils");
const services_1 = require("../services");
const getAllScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield (0, services_1.getScores)();
        res.send(resp);
    }
    catch (err) {
        (0, utils_1.handleHttp)(res, 'ERROR_GET_SCORE');
    }
});
exports.getAllScores = getAllScores;
const postScore = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, score } = body;
        const resp = yield (0, services_1.insertScore)({ userName, score });
        res.send(resp);
    }
    catch (err) {
        (0, utils_1.handleHttp)(res, 'ERROR_POST_SCORE');
    }
});
exports.postScore = postScore;
//# sourceMappingURL=score.js.map