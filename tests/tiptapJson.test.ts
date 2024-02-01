import { tiptapJson } from "../src/app/index";

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
const contentHtml = "<p>Example <strong>Text</strong></p>";

test("should return a JSON", () => {
    const json = tiptapJson(contentHtml);
    expect(json).toEqual(contentJson);
});
