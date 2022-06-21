import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Inputs from "../Inputs";

describe("events", () => {
  it("checkbox click", () => {
    const { getByTestId } = render(<Inputs />);
    const checkbox = getByTestId("simple-checkbox");
    expect(checkbox).not.toBeChecked();
    // fireEvent.click(checkbox);
    userEvent.click(checkbox);
    // userEvent.click(checkbox, { ctrlKey: true, shiftKey: true });
    expect(checkbox).toBeChecked();
  });

  it("input focus", () => {
    const { getByTestId } = render(<Inputs />);
    const input = getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it("double click", () => {
    const { getByTestId } = render(<Inputs />);
    const checkbox = getByTestId("simple-checkbox");
    expect(checkbox).not.toBeChecked();
    userEvent.dblClick(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("focus", () => {
    const { getAllByTestId } = render(<Inputs />);
    const [checkbox, radio, number] = getAllByTestId("element");
    userEvent.tab();
    expect(checkbox).toHaveFocus();
    userEvent.tab();
    expect(radio).toHaveFocus();
    userEvent.tab();
    expect(number).toHaveFocus();
  });

  it("select option", () => {
    const { getByRole, getByText } = render(<Inputs />);

    userEvent.selectOptions(getByRole("combobox"), "1");
    expect(getByText("A").selected).toBeTruthy();

    userEvent.selectOptions(getByRole("combobox"), "2");
    expect(getByText("B").selected).toBeTruthy();
    expect(getByText("A").selected).toBeFalsy();
  });
});
