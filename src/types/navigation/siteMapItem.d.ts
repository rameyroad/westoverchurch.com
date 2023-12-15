export interface SiteMapItem {
    originalPageId: any;
    parentId: any;
    sortOrder: number;
    title: string;
    navigationTitle: any;
    metaIndex: boolean;
    metaPriority: number;
    menuTitle: string;
    pageTypeName: string;
    permalink: string;
    isHidden: boolean;
    published: string;
    created: string;
    lastModified: string;
    permissions: any[];
    id: string;
    level: number;
    items: Item[];
}

export interface Item {
    originalPageId: any;
    parentId: string;
    sortOrder: number;
    title: string;
    navigationTitle: any;
    metaIndex: boolean;
    metaPriority: number;
    menuTitle: string;
    pageTypeName: string;
    permalink: string;
    isHidden: boolean;
    published: string;
    created: string;
    lastModified: string;
    permissions: any[];
    id: string;
    level: number;
    items: Item[];
}
