import { gql } from '@kitql/all-in'

export const typeDefs = gql`
type Query {
	user(id: ID!): User
}

type User {
	id: ID!
}

`;