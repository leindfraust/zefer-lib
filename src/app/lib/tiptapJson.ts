import { generateJSON } from "@tiptap/html";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import HighLight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import CharacterCount from "@tiptap/extension-character-count";
import type { JSONContent } from "../types.d.ts";

/**
 * Description
 * @param {string} content The HTML of the content
 * @returns {JSONContent} returns JSONContent
 */

const tiptapJson = (content: string): JSONContent => {
    const html = generateJSON(content, [
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

export { tiptapJson };
