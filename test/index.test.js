describe("rollup-plugin-cssimport", () => {
  it("should import", async () => {
    await import("../test-out/index.js");
  });

  it("should color the body", async () => {
    await import("../test-out/index.js");
    const backgroundColor = getComputedStyle(document.body).backgroundColor;
    if (backgroundColor !== "rgba(0, 200, 0, 0.5)") throw new Error('Did not apply style to body element')
  });
});

describe("filter options", () => {
  it("should import", async () => {
    await import("../test-out/index-filtered.js");
  });

  it("should color the body", async () => {
    await import("../test-out/index.js");
    const color = getComputedStyle(document.body).color;
    if (color !== "rgba(0, 200, 0, 0.5)") throw new Error('Did not apply style to body element')
  });
});
