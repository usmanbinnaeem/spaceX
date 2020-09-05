import React from "react";
import "./style.css";

interface Props {
  data: any;
}

const ShipDetail: React.FC<Props> = ({ data }) => {
  return (
    <div className="ship-container">
      {!!data.ships &&
        data.ships.map(
          (
            ship: {
              image: React.ReactNode;
              name: React.ReactNode;
              active: React.ReactNode;
              type: React.ReactNode;
              successful_landings: React.ReactNode;
              year_built: React.ReactNode;
            },
            i: string | number | null | undefined
          ) =>
            !!ship && (
              <div className="inner__shipcontainer" key={i}>
                <table>
                  <tr style={{ backgroundColor: "#a8a2a2" }}>
                    <th>Name</th>
                    <td>{ship.name}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#333333", color: "#ffffff" }}>
                    <th>Ship Type</th>
                    <td>{ship.type}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#a8a2a2" }}>
                    <th>successful_landings</th>
                    <td>
                      {ship.successful_landings ? (
                        <span style={{ color: "#2cb84b" }}>true</span>
                      ) : (
                        <span style={{ color: "#ff695e" }}>false</span>
                      )}
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#333333", color: "#ffffff" }}>
                    <th>Active</th>
                    <td>
                      {ship.active ? (
                        <span style={{ color: "#2cb84b" }}>true</span>
                      ) : (
                        <span style={{ color: "#ff695e" }}>false</span>
                      )}
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#a8a2a2" }}>
                    <th>Year_built</th>
                    <td>{ship.year_built}</td>
                  </tr>
                </table>
              </div>
            )
        )}
    </div>
  );
};

export default ShipDetail;
