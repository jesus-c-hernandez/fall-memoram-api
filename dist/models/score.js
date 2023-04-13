"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreModel = void 0;
const mongoose_1 = require("mongoose");
const ScoreShema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ScoreModel = (0, mongoose_1.model)('scores', ScoreShema);
exports.ScoreModel = ScoreModel;
//# sourceMappingURL=score.js.map