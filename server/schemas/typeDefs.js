const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Genre {
    _id: ID
    name: String
  }

  type Game {
    _id: ID
    title: String
    description: String
    image: String
    price: Float
    quantity: Int
    genres: [Genre]
  }

  type Order {
    _id: ID
    purchaseDate: String
    games: [Game]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    password: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    genres: [Genre]
    games(genre: ID, title: String): [Game]
    game(_id: ID!): Game
    user: User
    order(_id: ID!): Order
    checkout(games: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!): Auth
    addOrder(games: [ID]!): Order
    updateUser(firstName: String, lastName: String, userName: String, email: String, password: String): User
    updateGame(_id: ID!, quantity: Int!): Game
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
