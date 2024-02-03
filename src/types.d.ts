export declare type JSONContent = {
    type?: string;
    attrs?: Record<string, any>;
    content?: JSONContent[];
    marks?: {
        type: string;
        attrs?: Record<string, any>;
        [key: string]: any;
    }[];
    text?: string;
    [key: string]: any;
};

export declare type PostsOptions = {
    q?: string;
    cursor?: string;
    limit?: number;
    orderBy?: "most-popular" | "latest";
};
