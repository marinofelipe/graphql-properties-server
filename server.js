const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of dishes we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const dishes = [
    {
        name: 'Buttered popcorn',
        country: 'USA',
        price: 3.0
    },
    {
        name: 'Masala dosa',
        country: 'India',
        price: 5.0
    },
    {
        name: 'Potato chips',
        country: 'UK',
        price: 3.5
    },
    {
        name: 'Seafood paella',
        country: 'Spain',
        price: 10.0
    },
    {
        name: 'Som tam',
        country: 'Thailand',
        price: 6.3
    },
    {
        name: 'Chicken rice',
        country: 'Singapore',
        price: 8.5
    },
    {
        name: 'Poutine',
        country: 'Canada',
        price: 4.6
    },
    {
        name: 'Tacos',
        country: 'Mexico',
        price: 9.6
    },
    {
        name: 'Marzipan',
        country: 'Germany',
        price: 5.0
    },
    {
        name: 'Chicken parm',
        country: 'Australia',
        price: 7.5
    },
    {
        name: 'Lasagna',
        country: 'Italy',
        price: 12.0
    },
    {
        name: 'Croissant',
        country: 'France',
        price: 4.0
    },
    {
        name: 'Feijoada',
        country: 'Brasil',
        price: 15.0
    }
  ];

// The GraphQL schema
const typeDefs = gql`

  type Dish {
    "Information about an available dish."
    name: String
    country: String
    price: Float
  }

  type Query {
    getDishes: [Dish]
    #getWelcomeText: [Dish]
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    getDishes: () => dishes,
    // getWelcomeText: () => 'Hello 🙋. Your 🍤 will be ready soon!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});