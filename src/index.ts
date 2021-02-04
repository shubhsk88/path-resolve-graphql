import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "./schema";
import "module-alias/register";

const server = new ApolloServer({
  schema,
});
const port = 4000;

const app = express();
server.applyMiddleware({ app });

app.listen(port, () => console.log(`Server running on ${port}  🚀 `));
