import gql from "graphql-tag";
export const GET_LAUNCH_DETAIL = gql`
  query LaunchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_year
      launch_date_local
      details
      launch_site {
        site_name
      }
      launch_success
      links {
        video_link
        article_link
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
      }
      upcoming
    }
    missionsResult {
      result {
        totalCount
      }
    }
  }
`;
