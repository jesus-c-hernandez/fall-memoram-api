"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('/', controllers_1.getAllScores);
router.post('/', middlewares_1.verifyToken, controllers_1.postScore);
exports.default = { router };
//# sourceMappingURL=score.js.map