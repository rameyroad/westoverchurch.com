import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';

import { Block, DynamicPost } from 'types/dynamicPage';
import { getBlogPostBySlug } from 'services/contentApi';
import { Typography } from '@mui/material';
import { ColumnBlock, HtmlBlock, ImageBlock, ImageGalleryBlock } from 'views/Content/components';
import { Hero } from './components/Hero';

interface Props {
    postName: string;
}

const BlogContent = ({ postName }: Props): JSX.Element => {
    const theme = useTheme();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [acivePost, setActivePost] = useState<DynamicPost | null>(null);

    const router = useRouter();

    const getContent = async () => {
        setIsLoading(true);
        try {
            const pc = await getBlogPostBySlug(postName);
            if (pc == null) {
                router.push('/not-found');
            } else {
                setActivePost(pc);
            }
        } catch (error) {
            console.log(error);
            router.push('/not-found');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (postName) {
            getContent();
        }
    }, [postName]);

    useEffect(() => {
        if (acivePost) {
            console.log('pageContent', acivePost);
        }
    }, [acivePost]);

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
        if (acivePost && acivePost.blocks) {
            return (
                <Box>
                    {acivePost.blocks.map((block: Block, index: number) => {
                        return (
                            <Typography component={'p'} key={index}>
                                {renderBlock(block, index)}
                            </Typography>
                        );
                    })}
                </Box>
            );
        }
        return <Fragment />;
    };

    return (
        <Main>
            <Hero post={acivePost} />
            <Container>{renderBlockContent()}</Container>
        </Main>
    );
};

export default BlogContent;
