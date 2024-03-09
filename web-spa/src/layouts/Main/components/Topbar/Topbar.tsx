'use client';

import Link from 'next/link';

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
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen, colorInvert = false }: Props): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { siteMap } = useSelector((state: RootState) => state.navigation);

  const theme = useTheme();
  const { mode } = theme.palette;

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
        sx={{ display: { xs: 'flex', md: 'none' } }}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon.png'
              : 'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon.png'
          }
          height={52}
          width={50}
        />
      </Box>
      {siteMap && (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          {siteMap.slice(0, 4).map((item: SiteMapItem, key: number) => (
            <Box key={key} marginLeft={4}>
              <NavItem
                title={item.title}
                id={`mainMenu-${item.id}`}
                item={item}
                items={item.items}
                colorInvert={colorInvert}
              />
            </Box>
          ))}
        </Box>
      )}
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        width={{ xs: 100, md: 120 }}
      >
        <Link href="/">
          <Box
            component={'img'}
            src={
              mode === 'light' && !colorInvert
                ? 'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon.png'
                : 'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon.png'
            }
            height={52}
            width={50}
          />
        </Link>
      </Box>
      {siteMap && (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          {siteMap.slice(4, 76).map((item: SiteMapItem, key: number) => (
            <Box key={key} marginLeft={4}>
              <NavItem
                title={item.title}
                id={`mainMenu-${item.id}`}
                item={item}
                items={item.items}
                colorInvert={colorInvert}
              />
            </Box>
          ))}
        </Box>
      )}
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
