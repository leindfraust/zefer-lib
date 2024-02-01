/**
 * @jest-environment jsdom
 */
import { tiptapText } from "../src/app/index";
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
    const text = tiptapText(contentJson);
    expect(text).toEqual("Example Text");
});
