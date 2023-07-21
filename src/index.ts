import "reflect-metadata"
import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { dataSources } from "./dataSources";
import { resolvers } from "./resolvers";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: true
    })

    const server = new ApolloServer({
        schema,
        dataSources,
    });

    const app = express();

    await server.start()

    server.applyMiddleware({ app })

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

bootstrap()
