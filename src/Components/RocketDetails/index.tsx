import React from "react";
import { useRocketsDetailsQuery } from "../../generated/graphql";
import RocketDetail from "./RocketDetail";
import "./style.css";

const RocketData = () => {
  const { data, loading, error } = useRocketsDetailsQuery();

  if (error)
    return (
      <div>
        <h2>There was an error</h2>
      </div>
    );
  if (loading)
    return (
      <div>
        <h2>Data is Loading....</h2>
      </div>
    );
  return (
    <div className="rocket-container">
      <RocketDetail data={data} />{" "}
    </div>
  );
};

export default RocketData;
