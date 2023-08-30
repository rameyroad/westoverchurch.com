import React, { Fragment, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import { Box, Typography } from '@mui/material';

import Main from 'layouts/Main';
import Container from 'components/Container';

import { Block, DynamicPost } from 'types/dynamicPage';
import { getBlogPostBySlug } from 'services/contentApi';
import { ColumnBlock, HtmlBlock, ImageBlock, ImageGalleryBlock } from 'views/Content/components';
import { Hero } from './components/Hero';
import Breadcrumb from 'views/BlogContent/components/Breadcrumb/Breadcrumb';

interface Props {
    postName: string;
}

const Content = ({ postName }: Props): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activePost, setActivePost] = useState<DynamicPost | null>(null);

    const getContent = async () => {
        setIsLoading(true);
        try {
            const pc = await getBlogPostBySlug(postName);
            if (pc == null) {
                notFound();
            } else {
                setActivePost(pc);
            }
        } catch (error) {
            console.log(error);
            notFound();
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (postName) {
            getContent();
        }
    }, [postName]);

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
        if (activePost && activePost.blocks) {
            return (
                <Box>
                    {activePost.blocks.map((block: Block, index: number) => {
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
            {activePost && (
                <Box bgcolor={'alternate.main'}>
                    <Container paddingY={2}>
                        <Breadcrumb
                            breadcrumbs={[
                                {
                                    href: '/blog',
                                    title: 'Blog Home',
                                    isActive: false,
                                },
                                {
                                    href: '#',
                                    title: `${activePost?.title ?? ''}`,
                                    isActive: true,
                                },
                            ]}
                        />
                    </Container>
                </Box>
            )}
            <Hero post={activePost} />
            <Container>{renderBlockContent()}</Container>
        </Main>
    );
};

export default Content;
