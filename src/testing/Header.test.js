import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
    it("should render the header title correctly", () => {
        render(<Header />);
        const headerTitle = screen.getByText(/Emoji Search/i);
        expect(headerTitle).toBeInTheDocument();
    });

    it("should render two emoji icons in the header", () => {
        render(<Header />);
        const emojiIcons = screen.getAllByRole("img");
        expect(emojiIcons.length).toBe(2);
    });
});
