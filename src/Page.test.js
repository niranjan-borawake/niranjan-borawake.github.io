import React from "react";
import { render } from "@testing-library/react";

import Page from "./Page";

test("renders learn react link", () => {
  expect(render(<Page />).container).toMatchSnapshot();
});
