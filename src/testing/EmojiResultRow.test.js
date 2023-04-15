import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiResultsRow from "../EmojiResultRow";

describe("EmojiResultsRow", () => {
    it("renders emoji and title correctly", () => {
        const title = "Smiling face";
        const symbol = "😊";
        render(<EmojiResultsRow title={title} symbol={symbol} />);

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();

        const emojiElement = screen.getByAltText(title);
        expect(emojiElement).toBeInTheDocument();
        expect(emojiElement.src).toContain(symbol.codePointAt(0).toString(16));
    });

    it("allows copying of emoji on click", () => {
        const title = "Smiling face";
        const symbol = "😊";
        render(<EmojiResultsRow title={title} symbol={symbol} />);

        const emojiRow = screen.getByText(title).closest("div");
        userEvent.click(emojiRow);

        expect(emojiRow).toHaveAttribute("data-clipboard-text", symbol);
    });
});
