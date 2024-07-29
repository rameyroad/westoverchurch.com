import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';

import { getPageBySlug } from 'services/contentApi';
import {
  Hero,
  HtmlBlock,
  ColumnBlock,
  ImageGalleryBlock,
  ImageBlock,
  SeparatorBlock,
  QuoteBlock,
} from './components';
import { Typography } from '@mui/material';
import { Block, DynamicPage } from 'types/dynamicPage';

interface Props {
  pageName: string;
}

const Content = ({ pageName }: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<DynamicPage | null>(null);

  const router = useRouter();

  const getContent = async () => {
    setIsLoading(true);
    try {
      const pc = await getPageBySlug(pageName, 'MainSite');
      if (pc == null) {
        router.push('/not-found');
      } else {
        setActivePage(pc);
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

  const renderBlock = (block: Block) => {
    switch (block.$type) {
      case 'Ramey.Cms.Content.Blocks.HtmlBlock':
        return <HtmlBlock block={block} />;
      case 'Ramey.Cms.Content.Blocks.ColumnBlock':
        return <ColumnBlock block={block} />;
      case 'Ramey.Cms.Content.Blocks.ImageGalleryBlock':
        return <ImageGalleryBlock block={block} />;
      case 'Ramey.Cms.Content.Blocks.ImageBlock':
        return <ImageBlock block={block} />;
      case 'Ramey.Cms.Content.Blocks.SeparatorBlock':
        return <SeparatorBlock block={block} />;
      case 'Ramey.Cms.Content.Blocks.QuoteBlock':
        return <QuoteBlock block={block} />;
      default:
        return (
          <Fragment>
            <div>No block renderer for block type {block.$type}</div>
            <div>{JSON.stringify(block)}</div>
          </Fragment>
        );
    }
  };

  const renderBlockContent = () => {
    if (activePage && activePage.blocks) {
      return (
        <Box>
          {activePage.blocks.map((block: Block, index: number) => {
            return (
              <Typography component={'p'} key={index}>
                {renderBlock(block)}
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
      {activePage?.primaryImage?.media?.publicUrl != null && (
        <Hero page={activePage as DynamicPage} />
      )}
      {!isLoading && renderBlockContent()}
    </Main>
  );
};

export default Content;
