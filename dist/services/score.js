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
exports.getScores = exports.insertScore = void 0;
const models_1 = require("../models");
const getScores = () => __awaiter(void 0, void 0, void 0, function* () {
    const respGetAll = yield models_1.ScoreModel.find({});
    return respGetAll;
});
exports.getScores = getScores;
const insertScore = (score) => __awaiter(void 0, void 0, void 0, function* () {
    const respInsert = models_1.ScoreModel.create(score);
    return respInsert;
});
exports.insertScore = insertScore;
//# sourceMappingURL=score.js.map