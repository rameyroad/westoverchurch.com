export type menuItem = {
    id: string;
    title: string;
    description: string;
    slug: string;
    target: string;
    items: Array<menuItem>;
};
