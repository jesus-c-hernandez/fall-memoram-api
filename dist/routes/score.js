"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/', controllers_1.getAllScores);
router.post('/', controllers_1.postScore);
exports.default = { router };
//# sourceMappingURL=score.js.map