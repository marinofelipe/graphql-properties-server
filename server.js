const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of dishes we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.

const properties = [
    {
        id: 0,
        title: 'Apartamento bonitão',
        neighborhood: 'Consoloacão',
        likes: 0,
        price: 450000,
    },
    {
        id: 1,
        title: 'Casa arrumadinha',
        neighborhood: 'Santana',
        likes: 1,
        price: 510300,
    },
    {
        id: 2,
        title: 'Apartamento com 3 quartos no Jardins',
        neighborhood: 'Jardins',
        likes: 10,
        price: 3650999,
    },
    {
        id: 3,
        title: 'Apartamento no Jabaquara',
        neighborhood: 'Jabaquara',
        likes: 15,
        price: 690000,
    },
    {
        id: 4,
        title: 'Casa pequena do vovó do UP',
        neighborhood: 'Centro',
        likes: 5,
        price: 1000000,
    },
    {
        id: 5,
        title: 'Apartamento antigo',
        neighborhood: 'Butantã',
        likes: 0,
        price: 390000,
    },
    {
        id: 6,
        title: 'Apartamento de 1 quarto',
        neighborhood: 'Consoloacão',
        likes: 3,
        price: 750000,
    },
    {
        id: 7,
        title: 'Casa com 2 suites',
        neighborhood: 'Morumbi',
        likes: 8,
        price: 1450000,
    },
    {
        id: 8,
        title: 'Apartamento com 1 banheiro',
        neighborhood: 'Santana',
        likes: 1,
        price: 300000,
    },
    {
        id: 9,
        title: 'Apartamento especial',
        neighborhood: 'Centro',
        likes: 2,
        price: 510000,
    },
    {
        id: 10,
        title: 'Casa arrumadinha 2',
        neighborhood: 'Santana',
        likes: 3,
        price: 520500,
    },
    {
        id: 11,
        title: 'Apartamento com 4 quartos em Pinheiros',
        neighborhood: 'Pinheiros',
        likes: 12,
        price: 1100000,
    },
    {
        id: 12,
        title: 'Apartamento em Interlagos',
        neighborhood: 'Interlagos',
        likes: 7,
        price: 690000,
    },
    {
        id: 13,
        title: 'Casa da vó querida',
        neighborhood: 'Vila Madalena',
        likes: 30,
        price: 750000,
    },
    {
        id: 14,
        title: 'Apartamento antigo',
        neighborhood: 'Butantã',
        likes: 0,
        price: 390000,
    },
    {
        id: 15,
        title: 'Apartamento bonitão',
        neighborhood: 'Consoloacão',
        likes: 0,
        price: 450000,
    }
];

const propertiesList = {
    properties
}

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
  }

  type Query {
    propertyList: PropertyListType
    #getDishes: [Dish]
    #getWelcomeText: [Dish]
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
    propertyList: () => propertiesList,
    // getWelcomeText: () => 'Hello 🙋. Your 🍤 will be ready soon!',
  },
  Mutation: {
    likeProperty: async (_, { id }) => {
        let property = properties.find(function(property) {
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