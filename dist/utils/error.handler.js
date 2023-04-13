"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, err, errorRaw) => {
    console.log('Error', errorRaw);
    console.log(typeof errorRaw);
    res.status(500).send({ err });
};
exports.handleHttp = handleHttp;
//# sourceMappingURL=error.handler.js.map