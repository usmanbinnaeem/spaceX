import React from "react";
import { useSuccessLaunchesQuery } from "../../generated/graphql";
import Chart from "./Chart";

function SuccesslaunchesContainerr() {
  const { data, loading, error } = useSuccessLaunchesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <>
      <Chart data={data} />
    </>
  );
}

export default SuccesslaunchesContainerr;
