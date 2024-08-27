'use client';

// import Link from 'next/link';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { fetchSiteMap } from '@/store/Navigation/NavSlice';
import { AppDispatch, RootState } from '@/store';
import { SiteMapItem } from '@/types/navigation/siteMapItem';
import { Menu, MenuItem, SubMenu } from '@/@menu/horizontal-menu';

interface Props {
  onSidebarOpen: () => void;
  colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen }: Props): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

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
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {siteMap && (
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
            {siteMap.map((item: SiteMapItem, key: number) => {
              if (item.items.length > 0) {
                return (
                  <SubMenu key={key} label={item.title}>
                    {item.items.map((subItem: SiteMapItem, subKey: number) => (
                      <MenuItem
                        key={subKey}
                        onClick={() => {
                          router.push(subItem.permaLink);
                        }}
                      >
                        {subItem.title}
                      </MenuItem>
                    ))}
                  </SubMenu>
                );
              } else {
                return (
                  <MenuItem
                    key={key}
                    onClick={() => {
                      router.push(item.permaLink);
                    }}
                  >
                    {item.title}
                  </MenuItem>
                );
              }
            })}
          </Menu>
        )}
      </Box>
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
