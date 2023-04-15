import filterEmoji from "../filterEmoji";
import emojiList from "../emojiList.json";

describe("filterEmoji", () => {
    test("should return correct number of emojis", () => {
        const searchText = "heart";
        const maxResults = 5;
        const filteredEmojis = filterEmoji(searchText, maxResults);
        expect(filteredEmojis.length).toEqual(maxResults);
    });

    test("should return emojis that match search text", () => {
        const searchText = "smile";
        const maxResults = 10;
        const filteredEmojis = filterEmoji(searchText, maxResults);
        filteredEmojis.forEach((emoji) => {
            expect(
                emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
                emoji.keywords.includes(searchText)
            ).toBeTruthy();
        });
    });

    test("should return all emojis if search text is empty", () => {
        const searchText = "";
        const maxResults = 100;
        const filteredEmojis = filterEmoji(searchText, maxResults);
        expect(filteredEmojis).toEqual(emojiList.slice(0, maxResults));
    });
});
