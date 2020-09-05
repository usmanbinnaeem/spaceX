import React from "react";
import { useLaunchDetailsQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";

interface OwnProps {
  id: number;
}

function LaunchDetailContainer({ id }: OwnProps) {
  const { data, loading, error, refetch } = useLaunchDetailsQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch();
  }, [id]);

  if (error) return <div>there was an error</div>;
  if (loading) return <div>Loading.....</div>;

  if (!data) return <div>please select a mmission for its details</div>;
  return (
    <div>
      <LaunchDetails data={data} />
    </div>
  );
}

export default LaunchDetailContainer;
