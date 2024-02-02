import { TextDecoder, TextEncoder } from "util";
import {
    ClipboardEventMock,
    DragEventMock,
} from "./src/utils/richTextTestUtils";

(global as any).ClipboardEvent = ClipboardEventMock;
(global as any).DragEvent = DragEventMock;
global.TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
