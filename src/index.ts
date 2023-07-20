import "reflect-metadata"
import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import { UserResolver } from "./resolvers/user.resolver";
import { buildSchema } from "type-graphql";

// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//     Query: {
//         hello: () => 'Hello world!',
//     },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// const app = express();

// server.start().then(() => {
//     server.applyMiddleware({ app });

//     app.listen({ port: 4000 }, () =>
//         console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
//     );
// })

async function main() {
    const schema = await buildSchema({
        resolvers: [UserResolver],
        emitSchemaFile: true
    })

    const server = new ApolloServer({ schema });

    const app = express();

    await server.start()

    server.applyMiddleware({ app })
    
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

main()
