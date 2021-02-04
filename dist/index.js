"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const schema_1 = __importDefault(require("./schema"));
require("module-alias/register");
const server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
});
const port = 4000;
const app = express_1.default();
server.applyMiddleware({ app });
app.listen(port, () => console.log(`Server running on ${port}  🚀 `));
//# sourceMappingURL=index.js.map