'use client';

// import Link from 'next/link';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

import { AppDispatch, RootState } from 'store';
import { fetchSiteMap } from 'store/Navigation/NavSlice';
import { SiteMapItem } from 'types/navigation/siteMapItem';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen }: Props): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { siteMap } = useSelector((state: RootState) => state.navigation);

  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchSiteMap('MainSite'));
  }, []);

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        sx={{ display: { xs: 'flex', md: 'flex' } }}
        component="a"
        href="/"
        title="Westover Church"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon_white.png'
          }
          height={52}
          width={50}
        />
      </Box>
      {siteMap && (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          {siteMap.slice(0, 7).map((item: SiteMapItem, key: number) => (
            <Box key={key} marginLeft={4}>
              <NavItem
                title={item.title}
                id={`mainMenu-${item.id}`}
                item={item}
                items={item.items}
                colorInvert={true}
              />
            </Box>
          ))}
        </Box>
      )}
      <Box sx={{ display: 'flex' }} alignItems={'right'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.0),
            color: 'rgba(255,255,255,1)',
            '&:hover': {
              borderColor: 'rgba(255,255,255,1)',
            },
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
