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
    seriesId?: string;
};

export declare type Post = {
    id: string;
    title: string;
    titleId: string;
    description: string;
    userId: string;
    author: string;
    authorUsername: string;
    authorImage: string;
    coverImage: string;
    content: JSONContent[];
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
};
