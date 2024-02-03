import { generateHTML } from "@tiptap/html";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import HighLight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import CharacterCount from "@tiptap/extension-character-count";
import type { JSONContent } from "../types.js";

/**
 * Converts `content` to HTML
 * @param {string} content The content body of the blog post e.g. response?.content
 * @returns {any} returns HTML
 */

const getHtml = (content: JSONContent): string => {
    const html = generateHTML(content, [
        TaskList,
        TaskItem,
        HighLight,
        StarterKit,
        Image,
        Link,
        Youtube,
        CharacterCount,
    ]);
    return html;
};

export { getHtml };
