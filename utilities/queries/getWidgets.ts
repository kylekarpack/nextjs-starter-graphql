import { gql } from "@apollo/client/core";

export const GET_WIDGETS = gql`
  query {
    widgets {
      id
      name
      description
      quantity
      cost
      salePrice
    }
  }
`;
