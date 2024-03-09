import React from 'react';
import { Card, Typography } from '@mui/material';
import { Block, Item } from 'types/dynamicPage';

export interface QuoteBlockProps {
  block?: Block;
  item?: Item;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ block, item }) => {
  if (block != null) {
    return (
      <Card sx={{ p: 3, maxWidth: '60%', m: 'auto' }}>
        <Typography variant="subtitle1">{block?.body?.value}</Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontStyle: 'italic', textAlign: 'end' }}
        >
          -- {block?.author?.value}
        </Typography>
      </Card>
    );
  }

  return (
    <Card sx={{ p: 3, maxWidth: '100%' }}>
      <Typography variant="subtitle1">{item?.body?.value}</Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontStyle: 'italic', textAlign: 'end' }}
      >
        -- {item?.author?.value}
      </Typography>
    </Card>
  );
};
