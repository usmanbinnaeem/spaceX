import React from "react";
import { SuccessLaunchesQuery } from "../../generated/graphql";
import { Pie, Line } from "react-chartjs-2";
import Launches from "../Launches/Launches";

interface Props {
  data: SuccessLaunchesQuery;
}

const Chart: React.FC<Props> = ({ data }) => {
  return (
    <>
      {!!data.launches && (
        <div>
          <Line
            data={{
              labels: ["Success Launches", "unSuccess Launches"],
              datasets: [
                {
                  label: "People",
                  backgroundColor: [
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                  ],
                  data: [
                    (data.launches.map(
                      (launch) => launch?.launch_success === true
                    ).length *
                      100) /
                      Launches.length,
                    (data.launches.map(
                      (launch) => launch?.launch_success === false
                    ).length *
                      100) /
                      Launches.length,
                  ],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: "Success rate of launches",
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default Chart;
