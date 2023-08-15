import React, { Fragment } from 'react';
import { Block, Item } from 'types/dynamicPage';

import { ItemHtmlBlock, ItemImageBlock, ItemPageBlock } from '.';

export interface BlockProps {
    block: Block;
}

export interface ItemProps {
    item: Item;
}

export const ColumnBlock: React.FC<BlockProps> = ({ block }) => {
    const renderItem = (item: Item, index: number) => {
        switch (item.type) {
            case 'Piranha.Extend.Blocks.HtmlBlock':
                return <ItemHtmlBlock item={item} />;
            case 'Piranha.Extend.Blocks.ImageBlock':
                return <ItemImageBlock item={item} />;
            case 'Piranha.Extend.Blocks.PageBlock':
                return <ItemPageBlock item={item} />;
            default:
                return (
                    <Fragment>
                        <div>No item renderer for {item.type}</div>
                    </Fragment>
                );
        }
    };

    let numColumns = block.items;

    return (
        <div className="block column-block">
            <div className="container">
                <div className="row">
                    {block.items?.map((item: Item, index: number) => {
                        return (
                            <div className="col-md" key={index}>
                                {renderItem(item, index)}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
