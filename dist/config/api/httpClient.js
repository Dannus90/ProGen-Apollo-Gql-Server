"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPutAuth = exports.fetchGetAuth = exports.fetchDeleteAuth = exports.fetchPostAuth = exports.fetchPostNoBody = exports.fetchPostNoAuth = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
// HEADER OPTIONS
const headerOptionsNoAuth = {
    headers: {
        "content-type": "application/json"
    }
};
const headerOptionsAuth = (authorization) => {
    return {
        headers: {
            authorization,
            "content-type": "application/json"
        }
    };
};
// API CALLS
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchPostNoAuth = async (url, method = "POST", body) => {
    const response = await node_fetch_1.default(url, {
        method,
        ...headerOptionsNoAuth,
        body: JSON.stringify(body)
    });
    return response;
};
exports.fetchPostNoAuth = fetchPostNoAuth;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchPostNoBody = async (url, method = "POST", authorization) => {
    const response = await node_fetch_1.default(url, {
        method,
        ...headerOptionsAuth(authorization)
    });
    return response;
};
exports.fetchPostNoBody = fetchPostNoBody;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchPostAuth = async (url, method = "POST", authorization, body) => {
    const response = await node_fetch_1.default(url, {
        method,
        ...headerOptionsAuth(authorization),
        body: JSON.stringify(body)
    });
    return response;
};
exports.fetchPostAuth = fetchPostAuth;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchDeleteAuth = async (url, method = "DELETE", authorization) => {
    const response = await node_fetch_1.default(url, {
        method,
        ...headerOptionsAuth(authorization)
    });
    return response;
};
exports.fetchDeleteAuth = fetchDeleteAuth;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchGetAuth = async (url, method = "GET", authorization) => {
    const response = await node_fetch_1.default(url, {
        method,
        ...headerOptionsAuth(authorization)
    });
    return response;
};
exports.fetchGetAuth = fetchGetAuth;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchPutAuth = async (url, method = "PUT", authorization, body) => {
    const response = await node_fetch_1.default(url, {
        method,
        ...headerOptionsAuth(authorization),
        body: JSON.stringify(body)
    });
    return response;
};
exports.fetchPutAuth = fetchPutAuth;
//# sourceMappingURL=httpClient.js.map