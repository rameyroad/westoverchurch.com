interface PageItem {
    id?: string | number;
    title: string;
    description?: string;
    isNew?: boolean;
    href: string;
    target?: string;
    items?: PageItem[];
}
