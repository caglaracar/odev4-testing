import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
    it("calls the textChange prop when user types in the input field", () => {
        const textChangeMock = jest.fn();
        render(<SearchInput textChange={textChangeMock} />);

        const inputElement = screen.getByRole("textbox");
        userEvent.type(inputElement, "smile");

        expect(textChangeMock).toHaveBeenCalledWith(expect.any(Object));
    });
});
