import { jest } from "@jest/globals";

export class ClipboardDataMock {
    getData: jest.MockedFunction<(param: string) => string>;
    setData: jest.MockedFunction<(param1: string, param2: string) => void>;

    constructor() {
        this.getData = jest.fn();
        this.setData = jest.fn();
    }
}

export class ClipboardEventMock extends Event {
    clipboardData: ClipboardDataMock;

    constructor(type: string, options?: EventInit) {
        super(type, options);
        this.clipboardData = new ClipboardDataMock();
    }
}

export class DataTransferMock {
    data: { [key: string]: string };

    constructor() {
        this.data = {};
    }

    setData(format: string, data: string): void {
        this.data[format] = data;
    }

    getData(format: string): string {
        return this.data[format] || "";
    }
}

export class DragEventMock extends Event {
    dataTransfer: DataTransferMock;

    constructor(type: string, options?: EventInit) {
        super(type, options);
        this.dataTransfer = new DataTransferMock();
    }
}
