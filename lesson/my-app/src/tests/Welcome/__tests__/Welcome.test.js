import React from "react";
import { render, screen } from "@testing-library/react";

import Welcome from "../Welcome";

test("renders learn react link", () => {
  const { getByText } = render(<Welcome />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  // Show all view in console
  // screen.debug();
});
