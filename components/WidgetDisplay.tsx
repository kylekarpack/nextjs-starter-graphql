import { useQuery, QueryResult } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { GET_WIDGETS } from "utilities/queries";
import { Widget } from "utilities/types";
import styles from "./WidgetDisplay.module.css";

const WidgetDisplay: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<{ widgets: Widget[] }> = useQuery(GET_WIDGETS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.error} data-testid="error">
        {error.message}
      </div>
    );
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity on Hand</th>
          <th>Cost</th>
          <th>Sales Price</th>
        </tr>
      </thead>
      <tbody>
        {data?.widgets?.map((widget) => {
          return (
            <tr>
              <td>{widget.name}</td>
              <td>{widget.description}</td>
              <td>{widget.quantity}</td>
              <td>{widget.cost}</td>
              <td>{widget.salePrice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WidgetDisplay;
