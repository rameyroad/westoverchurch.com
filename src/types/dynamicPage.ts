export interface ItemBody {
    id?: string;
    media?: Media;
    hasValue?: boolean;
    value?: string;
    page?: DynamicPage;
}

export interface Item {
    $type: string;
    body: ItemBody;
    aspect?: Aspect;
    id: string;
    type: string;
}

export interface Block {
    $type: string;
    body?: BlockBody;
    id: string;
    type: string;
    items?: Item[];
}

export interface DynamicPage {
    regions?: Regions;
    siteId: string;
    parentId: null;
    sortOrder: number;
    navigationTitle: string;
    isHidden: boolean;
    originalPageId: null;
    isStartPage: boolean;
    slug: string;
    permalink: string;
    metaTitle: null | string;
    metaKeywords: string;
    metaDescription: string;
    metaIndex: boolean;
    metaFollow: boolean;
    metaPriority: number;
    ogTitle: null;
    ogDescription: null;
    ogImage: Image;
    primaryImage: Image;
    excerpt: string;
    route: null;
    redirectUrl: null | string;
    redirectType: number;
    blocks: Block[];
    enableComments: boolean;
    closeCommentsAfterDays: number;
    commentCount: number;
    isCommentsOpen: boolean;
    published: Date;
    isPublished: boolean;
    id: string;
    typeId: string;
    title: string;
    permissions: any[];
    created: Date;
    lastModified: Date;
}

export interface Media {
    properties: Properties;
    versions: Version[];
    id: string;
    folderId: null;
    type: number;
    filename: string;
    contentType: string;
    title: null;
    altText: null;
    description: null;
    size: number;
    publicUrl: string;
    width: number;
    height: number;
    created: Date;
    lastModified: Date;
}

export interface Properties {}

export interface Version {
    id: string;
    size: number;
    width: number;
    height: number;
    fileExtension: FileExtension;
}

export enum FileExtension {
    Jpg = ".jpg",
}

export interface Aspect {
    value: number;
}

export interface BlockBody {
    value: string;
}

export interface Image {
    id: null | string;
    media: Media | null;
    hasValue: boolean;
}

export interface Regions {
    $type: string;
}
