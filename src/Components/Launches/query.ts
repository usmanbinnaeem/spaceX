import gql from "graphql-tag";

export const GET_LAUNCHES = gql`
  query launchesList {
    launches {
      id
      mission_name
      launch_year
      launch_success
    }
  }
`;
