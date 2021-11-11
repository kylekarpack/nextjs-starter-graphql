import { resolvers } from "./resolvers";

describe("resolvers", () => {
  it("loads basic resolver", async () => {
    const result = resolvers.Query.widgets(null as never);
    await expect(result).resolves.toBeTruthy();
    expect(Array.isArray(await result)).toBeTruthy();
  });
});
