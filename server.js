const { ApolloServer, gql } = require('apollo-server');

var propertyList = require('./mock.js').propertyList;

// The GraphQL schema
const typeDefs = gql`

  # property type and query
  type PropertyListType {
    properties: [PropertyType]
  }
  
  type PropertyType {
    "Information about an available property."
    id: ID!
    title: String
    neighborhood: String
    likes: Int
    price: Float
    contacts: [ContactType]
  }

  type ContactType {
    id: ID!
    name: String!
    message: String!
  }

  type Query {
    propertyList: PropertyListType
  }

  # property like mutation
  type Mutation {
    likeProperty(id: ID!): PropertyUpdateResponse!
  }

  type PropertyUpdateResponse {
    success: Boolean!
    message: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    propertyList: () => propertyList,
    // getWelcomeText: () => 'Hello 🙋. Your 🍤 will be ready soon!',
  },
  Mutation: {
    likeProperty: async (_, { id }) => {
        let property = propertyList.properties.find(function(property) {
            return property.id == id
        })
        property.likes += 1

        return {
            success: true,
            message: "The property amount of likes was correctly updated!"
        }
      }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});