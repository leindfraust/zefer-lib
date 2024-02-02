/**
 * @jest-environment jsdom
 */
import { getText } from "../src/lib/getText";
test("should return a string", () => {
    const contentJson = {
        type: "doc",
        content: [
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: "Example ",
                    },
                    {
                        type: "text",
                        marks: [
                            {
                                type: "bold",
                            },
                        ],
                        text: "Text",
                    },
                ],
            },
        ],
    };
    const text = getText(contentJson);
    expect(text).toEqual("Example Text");
});
