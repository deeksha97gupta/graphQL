export const typeDefs = `#graphs

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    publishedYear: String!
    author: Author
  }

  type Query {
    authors: [Author]
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, autherId: ID!): [Book]!
  }
`