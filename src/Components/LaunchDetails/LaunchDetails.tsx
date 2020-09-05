import React from "react";
import { LaunchDetailsQuery } from "../../generated/graphql";
import moment from "moment";
import "./stylee.css";

interface Props {
  data: LaunchDetailsQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  if (!data.launch) return <div>No data avilable</div>;
  return (
    <div className="detailcontainer">
      <div className="table">
        <table
          style={{
            borderCollapse: "collapse",
            borderSpacing: "0",
          }}
        >
          <thead style={{ color: "#fff" }}>
            <tr>
              <th>Mission</th>
              <th>Rocket</th>
              <th>Rocket Type</th>
              <th>UpComing</th>
              <th>Article Link</th>
              <th>Vedio link</th>
            </tr>
          </thead>
          <tbody style={{ color: "#fff" }}>
            <tr>
              <td style={{ border: "1px solid #333" }}>
                {data.launch.mission_name}
              </td>
              <td style={{ border: "1px solid #333" }}>
                {data.launch.rocket?.rocket_name}
              </td>

              <td style={{ border: "1px solid #333" }}>
                {data.launch.rocket?.rocket_type}
              </td>
              <td style={{ border: "1px solid #333" }}>
                {data.launch.upcoming ? (
                  <span style={{ color: "#2cb84b" }}>true</span>
                ) : (
                  <span style={{ color: "#ff695e" }}>false</span>
                )}
              </td>
              <td style={{ border: "1px solid #333" }}>
                {data.launch.links?.article_link}
              </td>
              <td style={{ border: "1px solid #333" }}>
                {data.launch.links?.video_link}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ margin: "20px" }}>
        Launch :{" "}
        {data.launch.launch_success ? (
          <span style={{ color: "#2cb84b" }}>Success</span>
        ) : (
          <span style={{ color: "#ff695e" }}>Failed</span>
        )}
      </div>
      <div style={{ margin: "20px" }}>
        Date: {moment(data.launch.launch_date_local).format("MMMM Do, YYYY")}
      </div>

      <div className="detail">
        <p>{data.launch.details}</p>
      </div>
      <div className="images">
        {data.launch.links?.flickr_images?.map((image) =>
          image ? (
            <img style={{ width: "350px" }} src={image} alt="" key={image} />
          ) : (
            "No iage found for related mission"
          )
        )}
      </div>
    </div>
  );
};

export default LaunchDetails;
