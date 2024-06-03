import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import NavItem from './components/NavItem';
import { RootState } from 'store';
import { SiteMapItem } from 'types/navigation/siteMapItem';

const SidebarNav = (): JSX.Element => {
  const { siteMap } = useSelector((state: RootState) => state.navigation);

  useEffect(() => {}, [siteMap]);

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Westover Church"
          width={{ xs: 100, md: '90vw', lg: '92vw' }}
        >
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
      {siteMap && (
        <Box paddingX={2} paddingY={2}>
          {siteMap.map((item: SiteMapItem, key: number) => (
            <Box key={key}>
              <NavItem title={item.title} items={item.items} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SidebarNav;
