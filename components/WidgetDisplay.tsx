import { useQuery, QueryResult } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { GET_WIDGETS } from "utilities/queries";
import { Widget } from "utilities/types";

const WidgetDisplay: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<Widget[]> = useQuery(GET_WIDGETS); 

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="error">{error.message}</div>
    );
  }

  return (
    <>
      {JSON.stringify(data)}
    </>
  );
}

export default WidgetDisplay;