import { Widget } from "utilities/types";

export const resolvers = {
  Query: {
    widgets: async (_: never): Promise<Widget[]> => {
      return [
        {
          id: 1,
          name: "Thing",
          description: "A thing for various purposes",
          cost: 23.12,
          salePrice: 36,
          quantity: 112
        }
      ];
    }
  }
};
