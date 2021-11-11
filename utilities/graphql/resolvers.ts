import { Widget } from "utilities/types";

export const resolvers = {
  Query: {
    widgets: async (_: never): Promise<Widget[]> => {
      return [];
    }
  }
};
