import React from "react";
import { LaunchesListQuery } from "../../generated/graphql";
import "./style.css";

interface Props {
  data: LaunchesListQuery;
}

export interface OwnProps {
  handleIdChange: (newId: string) => void;
}

interface Props extends OwnProps {
  data: LaunchesListQuery;
}

const Launches: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className="container">
    <ol className="orderlist">
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li
                onClick={() => handleIdChange(launch.id!)}
                key={i}
                className="listitem"
              >
                {launch.mission_name} - {launch.launch_year}
                {launch.launch_success}
              </li>
            )
        )}
    </ol>
  </div>
);

export default Launches;
