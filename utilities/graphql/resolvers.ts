import { Widget } from "utilities/types";
import widgets from "data/widgets.json";

export const resolvers = {
  Query: {
    widgets: async (_: never): Promise<Widget[]> => {
      return widgets;
    }
  }
};
