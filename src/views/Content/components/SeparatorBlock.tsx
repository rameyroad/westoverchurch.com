import React from 'react';
import { Divider } from '@mui/material';
import { Block } from 'types/dynamicPage';

export interface BlockProps {
    block: Block;
}

export const SeparatorBlock: React.FC<BlockProps> = ({ block }) => {
    return <Divider sx={{ mt: 3, mb: 3, ml: 10, mr: 10 }} />;
};
