import { tiptapHtml } from "../src/app/index";

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

test("should return an HTML string", () => {
    const html = tiptapHtml(contentJson);
    expect(html).toEqual(contentHtml);
});
