import { ApolloServer, gql } from 'apollo-server-micro'
import Server from 'next/dist/next-server/server/next-server'

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`

  const resolvers = {
    Query: {
      sayHello: () => {
        return 'hello lvluptuts'
      }
    }
  }

  // async function startApolloServer(typeDefs, resolvers) {
  //   const apolloServer = new ApolloServer({ typeDefs, resolvers })
  //   const { url } = await apolloServer.listen()
  //   console.log(`Apollo server running at ${url}.`);
  //   return apolloServer
  // }

  
  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  export const config = {
    api: {
      bodyParser: false
    }
  }

  // // export default apolloServer.start().then(() => apolloServer.createHandler({ path: '/api/graphql'}))
  module.exports = apolloServer.start().then(() => apolloServer.createHandler({ path: '/api/graphql'}))

  // const apolloServer = startApolloServer(typeDefs, resolvers)
  // module.exports = apolloServer.createHandler({ path: '/api/graphql'})