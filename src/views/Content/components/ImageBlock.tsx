import React from 'react';
import { Box } from '@mui/material';
import { Block } from 'types/dynamicPage';

export interface BlockProps {
    block: Block;
}

export const ImageBlock: React.FC<BlockProps> = ({ block }) => {
    return <Box className="block image-block">image-block</Box>;
};
