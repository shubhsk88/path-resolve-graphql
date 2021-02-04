"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const apollo_server_express_1 = require("apollo-server-express");
const typesArray = load_files_1.loadFilesSync(path_1.default.join(__dirname, "/api/**/**/*.graphql"));
const resolversArray = load_files_1.loadFilesSync(path_1.default.join(__dirname, "/api/**/**/resolvers.ts"));
const typeDefs = merge_1.mergeTypeDefs(typesArray);
const resolvers = merge_1.mergeResolvers(resolversArray);
const schema = apollo_server_express_1.makeExecutableSchema({ typeDefs, resolvers });
exports.default = schema;
//# sourceMappingURL=schema.js.map