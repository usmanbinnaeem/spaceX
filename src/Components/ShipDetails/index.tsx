import React from "react";
import { useRocketsListQuery } from "../../generated/graphql";
import ShipDetail from "./ShipDetail";

const ShipData = () => {
  const { loading, data, error } = useRocketsListQuery();

  if (error)
    return (
      <div>
        <h2>There was an error</h2>
      </div>
    );

  if (loading)
    return (
      <div>
        <h2>Data is loading.....</h2>
      </div>
    );

  return <ShipDetail data={data} />;
};

export default ShipData;
