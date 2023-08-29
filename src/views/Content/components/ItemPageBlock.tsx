import React from 'react';
import Link from 'next/link';
import { Block, Item } from 'types/dynamicPage';

export interface ItemProps {
    item: Item;
}

export const ItemPageBlock: React.FC<ItemProps> = ({ item }) => {
    return (
        <div className="card">
            <Link href={item.body?.page?.permalink ?? ''}>
                <img
                    className="card-img-top"
                    src={item.body?.page?.primaryImage?.media?.publicUrl ?? ''}
                    alt={item.body?.page?.primaryImage?.media?.altText ?? ''}
                />
            </Link>
            <div className="card-body">
                <h5>{item.body?.page?.title}</h5>
                <p>{item.body?.page?.excerpt}</p>
                <Link href={item.body?.page?.permalink ?? ''} className="btn btn-sm btn-primary">
                    Read more
                </Link>
            </div>
        </div>
    );
};
