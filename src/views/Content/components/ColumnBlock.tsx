import React, { Fragment } from 'react';
import { Block, Item } from 'types/dynamicPage';

import { ItemHtmlBlock, ItemImageBlock, ItemPageBlock, QuoteBlock } from '.';
import { Box, Container, Grid } from '@mui/material';

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
            case 'Piranha.Extend.Blocks.QuoteBlock':
                return <QuoteBlock item={item} />;
            default:
                return (
                    <Fragment>
                        <div>No item renderer for {item.type}</div>
                    </Fragment>
                );
        }
    };

    const numColumns = block.items;

    const getColumWidth = (size: string, length: number) => {
        switch (size) {
            case 'xs':
            case 'sm':
                return 12;

            case 'md':
            case 'lg':
                switch (length % 12) {
                    case 1:
                        return 12;
                    case 2:
                        return 6;
                    case 3:
                        return 4;
                    case 4:
                        return 3;
                    case 5:
                    case 6:
                    case 7:
                        return 2;
                    default:
                        return 1;
                }
        }
    };

    return (
        <Box>
            <Container>
                <Grid container>
                    {block.items?.map((item: Item, key: number) => {
                        return (
                            <Grid
                                item
                                key={key}
                                sm={getColumWidth('sm', block.items.length)}
                                md={getColumWidth('md', block.items.length)}
                                sx={{ p: 2 }}
                            >
                                {renderItem(item, key)}
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};
