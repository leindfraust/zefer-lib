import { Editor } from "@tiptap/core";
import jsdom from "jsdom";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import HighLight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import CharacterCount from "@tiptap/extension-character-count";
import type { JSONContent } from "../types.d.ts";
import { tiptapHtml } from "./tiptapHtml";

const { JSDOM } = jsdom;
const dom = new JSDOM(
    '<!DOCTYPE html><html><body><div class"element"></div></body></html>',
);
const doc = dom.window.document;
const element = doc.querySelector(".element")!;

/**
 * Description
 * @param {JSONContent} content The content body of the blog post e.g. response?.content
 * @returns {string} returns plain text
 */

const tiptapText = (content: JSONContent): string => {
    const editor = new Editor({
        element: element,
        extensions: [
            TaskList,
            TaskItem,
            HighLight,
            StarterKit,
            Image,
            Link,
            Youtube,
            CharacterCount,
        ],
        content: tiptapHtml(content),
    });
    return editor.getText();
};

export { tiptapText };
