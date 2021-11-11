import { useQuery, QueryResult } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { GET_WIDGETS } from "utilities/queries";
import { Widget } from "utilities/types";

const WidgetDisplay: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<{ widgets: Widget[] }> = useQuery(GET_WIDGETS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div data-testid="error">{error.message}</div>;
  }

  return <div>{JSON.stringify(data?.widgets)}</div>;
};

export default WidgetDisplay;
