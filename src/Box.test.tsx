import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "@emotion/jest";
import { Box } from "./Box";

expect.extend(matchers);

describe("<Box />", () => {
  test("renders with correct styles", () => {
    const tree = renderer.create(<Box>box</Box>).toJSON();
    expect(tree).toHaveStyleRule("padding", "1rem");
    expect(tree).toHaveStyleRule("background-color", "#f33");
    expect(tree).toHaveStyleRule("color", "#fff");
  });
});
