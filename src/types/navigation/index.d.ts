interface PageItem {
    id?: string | number;
    title: string;
    isNew?: boolean;
    href: string;
    target?: string;
    items?: PageItem[];
}
