import React from "react";
import { useLaunchesListQuery } from "../../generated/graphql";
import Launches, { OwnProps } from "./Launches";

const LaunchListContainer = (props: OwnProps) => {
  const { data, error, loading } = useLaunchesListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <>
      <Launches data={data} {...props} />
    </>
  );
};

export default LaunchListContainer;
