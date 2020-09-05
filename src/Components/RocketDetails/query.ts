import gql from "graphql-tag";
export const GET_ROCKET_DETAIL = gql`
  query RocketsDetails {
    rockets {
      id
      type
      name
      company
      engines {
        version
        number
      }
      description
    }
  }
`;
