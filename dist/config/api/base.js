"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROGEN_BASE_URL = void 0;
const ensureEnvVariable = (envVar) => {
    if (!process.env[envVar]) {
        throw new Error("Missing environment variable: " + envVar);
    }
};
ensureEnvVariable("PROGEN_BASE_URL");
const API_V1 = "api/v1";
exports.PROGEN_BASE_URL = `${process.env.PROGEN_BASE_URL}/${API_V1}`;
//# sourceMappingURL=base.js.map