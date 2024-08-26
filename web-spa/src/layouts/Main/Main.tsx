import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { Topbar, Sidebar, Footer } from './components';
import Container from '@/components/Container';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
  bgcolor2?: string;
}

const Main = ({
  children,
  colorInvert = false,
  bgcolor = 'rgba(39, 57, 66, .85)',
  bgcolor2 = 'rgba(39, 57, 66, .9)',
}: Props): JSX.Element => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? bgcolor2 : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Main;
