import React from 'react';

import { Box, Container } from '@mui/material';
import { Block } from 'types/dynamicPage';

export interface BlockProps {
  block: Block;
}

export const HtmlBlock: React.FC<BlockProps> = ({ block }) => {
  return (
    <Box>
      <Container>
        <div className="block html-block">
          <div className="container">
            <div
              dangerouslySetInnerHTML={{
                __html: block?.body?.value ?? '',
              }}
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};
