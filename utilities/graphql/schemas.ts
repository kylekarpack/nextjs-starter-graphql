/* istanbul ignore file */
import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Widget {
    id: Int
    name: String
    description: String
    quantity: Int
    cost: Float
    salePrice: Float;
  }

  type Query {
    widgets: [Widget]
  }
`;
