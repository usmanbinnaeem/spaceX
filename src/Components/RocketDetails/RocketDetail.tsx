import React from "react";
import "./style.css";

interface Props {
  data: any;
}

const RocketDetail: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {!!data.rockets &&
        data.rockets.map(
          (
            rocket: {
              name: React.ReactNode;
              type: React.ReactNode;
              company: React.ReactNode;
              engines: { number: React.ReactNode; version: React.ReactNode };
              description: React.ReactNode;
            },
            i: string | number | null | undefined
          ) =>
            !!rocket && (
              <div key={i} className="inner__container">
                <table>
                  <tr style={{ backgroundColor: "#a8a2a2" }}>
                    <th>Name</th>
                    <td>{rocket.name}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#333333", color: "#ffffff" }}>
                    <th>Rocket Type</th>
                    <td>{rocket.type}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#a8a2a2" }}>
                    <th>Company</th>
                    <td>{rocket.company}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#333333", color: "#ffffff" }}>
                    <th>Engine #</th>
                    <td>{rocket.engines.number}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#a8a2a2" }}>
                    <th>Engine Version</th>
                    <td>{rocket.engines.version}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#333333", color: "#ffffff" }}>
                    <th>Description</th>
                    <td>{rocket.description}</td>
                  </tr>
                </table>
              </div>
            )
        )}
      ;
    </div>
  );
};

export default RocketDetail;
