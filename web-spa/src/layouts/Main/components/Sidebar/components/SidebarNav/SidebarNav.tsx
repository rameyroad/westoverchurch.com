import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

// import NavItem from './components/NavItem';
import { RootState } from 'store';
// import { SiteMapItem } from 'types/navigation/siteMapItem';
import { Button, Grid, Typography } from '@mui/material';
// import Link from 'next/link';

const SideNavItem = ({ title, targetUrl }: any) => {
  return (
    <Button
      size={'large'}
      component={'a'}
      href={targetUrl}
      fullWidth
      sx={{
        justifyContent: 'flex-start',
      }}
    >
      <Typography fontSize={22} color={'common.white'}>
        {title}
      </Typography>
    </Button>
  );
};

const SideNavButton = ({ title, targetUrl }: any) => {
  return (
    <Box
      sx={{
        m: 3,
        borderWidth: 4,
        borderColor: 'common.white',
        borderStyle: 'solid',
        textAlign: 'center',
        width: '300px',
        justifyContent: 'flex-end',
        justifyItems: 'flex-end',
      }}
    >
      <Button
        size={'large'}
        component={'a'}
        href={targetUrl}
        fullWidth
        sx={{
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" fontSize={22} color={'common.white'}>
          {title}
        </Typography>
      </Button>
    </Box>
  );
};

const SidebarNav = (): JSX.Element => {
  const { siteMap } = useSelector((state: RootState) => state.navigation);

  useEffect(() => {}, [siteMap]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
      width={'95vw'}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'url(https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon_white.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05,
          zIndex: 1,
        }}
      />
      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          color: 'white', // Adjust text color based on your design
          p: 2,
        }}
      >
        <Box width={1} paddingX={2} paddingY={1}>
          <Box display={'flex'} component="a" href="/" title="Westover Church">
            <Box
              component={'img'}
              src={
                'https://westovercontent.blob.core.windows.net/cmscontent/assets/logo_white_0ef4d28e2a.png'
              }
              width={315}
              height={60}
            />
          </Box>
        </Box>
        <Box sx={{ m: 5 }}>
          <Grid container>
            <Grid item sm={12} md={8}>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h3">About</Typography>
                  <Box sx={{ ml: 3, mb: 5 }}>
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h3">Resources</Typography>
                  <Box sx={{ ml: 3, mb: 5 }}>
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h3">Gathered</Typography>
                  <Box sx={{ ml: 3, mb: 5 }}>
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h3">Scattered</Typography>
                  <Box sx={{ ml: 3, mb: 5 }}>
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h3">Ministries</Typography>
                  <Box sx={{ ml: 3, mb: 5 }}>
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                    <SideNavItem
                      title="Lorem Ipsum"
                      targetUrl="/#lorem-ipsum"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              sx={{
                textAlign: 'right',
              }}
            >
              <SideNavButton title="Plan a Visit" targetUrl="/#lorem-ipsum" />
              <SideNavButton title="My Westover" targetUrl="/#lorem-ipsum" />
              <SideNavButton title="Give Online" targetUrl="/#lorem-ipsum" />
              <SideNavButton
                title="What We Believe"
                targetUrl="/#lorem-ipsum"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
