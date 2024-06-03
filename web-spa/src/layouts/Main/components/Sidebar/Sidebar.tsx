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
          height: '100%',
          width: '100vw',
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
            <Box flex={1}>
              <SidebarNav />
              {/* Contents of the left box */}
            </Box>
            <Box width={50} alignItems={'right'}>
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
                }}
              >
                <CloseIcon fontSize="large" />
              </Button>
              {/* Contents of the right box */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
