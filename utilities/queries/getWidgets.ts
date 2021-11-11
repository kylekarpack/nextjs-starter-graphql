import { gql } from "@apollo/client/core";

export const GET_WIDGETS = gql`
  query {
    data: widgets {
      id
      name
      
    }
  }
`;
