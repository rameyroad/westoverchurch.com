import React from 'react';
import { Divider } from '@mui/material';
import { Block } from '@/types/dynamicPage';

export interface BlockProps {
  block: Block;
}

export const SeparatorBlock: React.FC<BlockProps> = () => {
  return <Divider sx={{ mt: 5, mb: 5, ml: 10, mr: 10 }} />;
};
