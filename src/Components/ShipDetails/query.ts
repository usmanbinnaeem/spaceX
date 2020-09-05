import gql from "graphql-tag";

export const GET_Rockets = gql`
  query RocketsList {
    ships {
      name
      type
      successful_landings
      year_built
      active
      image
    }
  }
`;
