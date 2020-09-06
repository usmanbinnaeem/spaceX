import gql from "graphql-tag";

export const GET_LAUNCHES_for_chart = gql`
  query successLaunches {
    launches {
      launch_success
    }
  }
`;
