import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Search from "../Search";

// tips
/*
Assertive Functions:
- toBeDisabled            - toBeEnabled               - toBeEmpty
- toBeEmptyDOMElement     - toBeInTheDocument         - toBeInvalid
- toBeRequired            - toBeValid                 - toBeVisible
- toContainElement        - toContainHTML             - toHaveAttribute
- toHaveClass             - toHaveFocus               - toHaveFormValues
- toHaveStyle             - toHaveTextContent         - toHaveValue
- toHaveDisplayValue      - toBeChecked               - toBePartiallyChecked
- toHaveDescription
*/

/*
Search variants:
  getBy:                    queryby:                    findBy:
- getByText               - queryByText               - findByText
- getByRole               - queryByRole               - findByRole
- getByLabelText          - queryByLabelText          - findByLabelText
- getByPlaceholderText    - queryByPlaceholderText    - findByPlaceholderText
- getByAltText            - queryByAltText            - findByAltText
- getByDisplayValue       - queryByDisplayValue       - findByDisplayValue
- getAllBy                - queryAllBy                - findAllBy
*/

/*
Search variants:
  getBy:                    queryby:                    findBy:
- getByText               - queryByText               - findByText
- getByRole               - queryByRole               - findByRole
- getByLabelText          - queryByLabelText          - findByLabelText
- getByPlaceholderText    - queryByPlaceholderText    - findByPlaceholderText
- getByAltText            - queryByAltText            - findByAltText
- getByDisplayValue       - queryByDisplayValue       - findByDisplayValu e
- getAllBy                - queryAllBy                - findAllBy
*/
// tips - end

describe("Search", () => {
  it("toMatchSnapshot", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment(<Search />)).toMatchSnapshot();
  });

  it("renders Search component", () => {
    render(<Search />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("search text...")).toBeInTheDocument();
    expect(screen.getByAltText("search image")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();

    // getByText vs queryByText
    // expect(screen.getByText(/Searches for react:/i)).toBeNull(); // use it if you need to check that element is present
    // expect(screen.queryByText(/Searches for react:/i)).toBeNull();  // use it if you need to check that element is absent
  });

  it("async await", async () => {
    render(<Search />);
    expect(screen.queryByText(/Logged in as/)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Logged in as/)).toBeInTheDocument();
    screen.debug();

    // Assertive Functions Examples:
    expect(screen.getByAltText(/search image/)).toHaveClass("image");
    expect(screen.getByLabelText(/search/i)).not.toBeRequired();
    expect(screen.getByLabelText(/search/i)).toBeEmpty();
    expect(screen.getByLabelText(/search/i)).toHaveAttribute("id");
  });

  it("fireEvent", () => {
    render(<Search />);
    expect(screen.queryByText(/Searches for React/)).toBeNull();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "React" },
    });
    expect(screen.queryByText(/Searches for React/)).toBeInTheDocument();
  });
});
