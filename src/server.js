import { GraphQLSchema } from 'graphql';
import express from 'express';
import graphqlHTTP  from 'express-graphql';
import { EntryType } from './querySchema';

const schema = new GraphQLSchema({
    query: EntryType
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }));
  
app.listen(4000);