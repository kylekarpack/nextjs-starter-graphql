import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { act, render } from "@testing-library/react";
import { GraphQLError } from "graphql";
import React from "react";
import { GET_WIDGETS } from "utilities/queries";
import { Widget } from "utilities/types";
import WidgetDisplay from "./WidgetDisplay";

const getMock = (data: Widget[] = []): MockedResponse<Record<string, Widget[]>> => {
  return {
    request: {
      query: GET_WIDGETS
    },
    result: {
      data: {
        widgets: []
      }
    }
  };
};

describe("widget display component", () => {
  it("renders empty", () => {
    const mocks = [getMock()];

    const cmp = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <WidgetDisplay />
      </MockedProvider>
    );

    expect(cmp.container).toBeVisible();
  });

  it("renders error", async () => {
    const errorText = "Bad";
    const mocks = [
      {
        ...getMock(),
        error: new GraphQLError(errorText)
      }
    ];

    const cmp = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <WidgetDisplay />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(cmp.getByTestId("error")).toHaveTextContent(errorText);
  });
});
