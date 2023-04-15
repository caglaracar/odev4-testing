import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiResults from "../EmojiResults";

describe("EmojiResults component", () => {
    it("renders correctly with given props", () => {
        const emojiData = [
            { title: "Smiling Face with Heart-Eyes", symbol: "😍" },
            { title: "Smiling Face with Sunglasses", symbol: "😎" },
            { title: "Thumbs Up Sign", symbol: "👍" },
        ];
        render(<EmojiResults emojiData={emojiData} />);
        emojiData.forEach((emoji) => {
            const emojiTitle = screen.getByText(emoji.title);
            expect(emojiTitle).toBeInTheDocument();
            const emojiImg = screen.getByAltText(emoji.title);
            expect(emojiImg).toBeInTheDocument();
        });
    });
});
