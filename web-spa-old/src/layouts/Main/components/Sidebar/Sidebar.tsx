import React from 'react';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { SidebarNav } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}

const Sidebar = ({ open, variant, onClose }: Props): JSX.Element => {
  return (
    <Drawer
      // anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      // sx={{
      //   '& .MuiPaper-root': {
      //     width: '100%',
      //   },
      // }}
    >
      <Box
        id="sidebar"
        sx={{
          backgroundColor: 'rgba(96, 119, 132, 1)',
          color: 'common.white',
          minHeight: '100vh',
          width: '100vw',
          overflow: 'auto',
          padding: 1,
        }}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
        >
          <Box display={'flex'} alignItems={'top'}>
            <SidebarNav />
            <Box position="absolute" top={0} right={0}>
              <Button
                onClick={() => onClose()}
                aria-label="Menu"
                variant={'outlined'}
                sx={{
                  borderRadius: 2,
                  minWidth: 'auto',
                  padding: 1,
                  color: 'rgba(255,255,255,1)',
                  borderColor: 'rgba(255,255,255,0)',
                  transition: 'transform 0.3s ease 0s',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0)',
                    transform: 'rotate(90deg)',
                    transition: 'transform 0.3s ease 0s',
                  },
                  zIndex: 100,
                }}
              >
                <CloseIcon fontSize="large" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
