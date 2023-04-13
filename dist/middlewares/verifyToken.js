"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
require("dotenv/config");
const verifyToken = (req, res, next) => {
    try {
        const TOKEN = process.env.TOKEN;
        const tokenHeader = req.headers.authorization || null;
        const tokenUser = tokenHeader === null || tokenHeader === void 0 ? void 0 : tokenHeader.split(' ').pop();
        if (!tokenUser || tokenUser !== TOKEN) {
            res.status(401).send('NO_VALID_TOKEN');
        }
        else {
            next();
        }
    }
    catch (err) {
        res.status(400).send('NO_VALID_SESSION');
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map