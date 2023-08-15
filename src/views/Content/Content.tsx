import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { Typography } from '@mui/material';
import { getPageByPermalink } from 'services/contentApi';
import { Block, DynamicPage } from 'types/dynamicPage';
import { HtmlBlock, ColumnBlock, ImageGalleryBlock, ImageBlock } from './components';

interface Props {
    pageName: string;
}

const Content = ({ pageName }: Props): JSX.Element => {
    const theme = useTheme();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [pageContent, setPageContent] = useState<DynamicPage | null>(null);

    const router = useRouter();

    const getContent = async () => {
        setIsLoading(true);
        try {
            const pc = await getPageByPermalink(pageName, 'MainSite');
            console.log('pc', pc);
            if (pc == null) {
                router.push('/not-found');
            } else {
                setPageContent(pc);
            }
        } catch (error) {
            console.log(error);
            router.push('/not-found');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (pageName) {
            getContent();
        }
    }, [pageName]);

    useEffect(() => {
        if (pageContent) {
            console.log('pageContent', pageContent);
        }
    }, [pageContent]);

    const renderBlock = (block: Block, index: number) => {
        switch (block.type) {
            case 'Piranha.Extend.Blocks.HtmlBlock':
                return <HtmlBlock block={block} />;
            case 'Piranha.Extend.Blocks.ColumnBlock':
                return <ColumnBlock block={block} />;
            case 'Piranha.Extend.Blocks.ImageGalleryBlock':
                return <ImageGalleryBlock block={block} />;
            case 'Piranha.Extend.Blocks.ImageBlock':
                return <ImageBlock block={block} />;
            default:
                return (
                    <Fragment>
                        <div>No block renderer for block type {block.type}</div>
                    </Fragment>
                );
        }
    };

    const renderBlockContent = () => {
        if (pageContent && pageContent.blocks) {
            return (
                <Fragment>
                    {pageContent.blocks.map((block: Block, index: number) => {
                        return <Fragment key={index}>{renderBlock(block, index)}</Fragment>;
                    })}
                </Fragment>
            );
        }
        return <Fragment />;
    };

    return (
        <Box>
            <Typography variant="h4">{pageContent?.title}</Typography>
            <Box>{renderBlockContent()}</Box>
        </Box>
    );
};

export default Content;
