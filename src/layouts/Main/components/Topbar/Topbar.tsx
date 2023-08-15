import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

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

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  const [mainMenu, setMainMenu] = useState<Array<PageItem> | null>(null);
  const [rightMenu, setRightMenu] = useState<Array<PageItem> | null>(null);

  const getMenu = async (menuName: string) => {
    let myHeaders = new Headers({
      Authorization: 'Basic R2xvYmFsV2ViVXNlcjo3NENGRDFEQkFBRTk0Mzk4QjY1QUE0RjUzNzYzNUIxMw==',
    });
    let url = `https://rameyroad-westover-content.azurewebsites.net/api/cms_content/${menuName}/all`;
    let resp = await fetch(url, {
      headers: myHeaders,
      next: { revalidate: 300 },
    });
    if (resp.ok) {
      let m = await resp.json();
      return m;
    }
    return null;
  };

  const getMenus = async () => {
    let main = await getMenu('mainMenu');
    setMainMenu(main);

    let right = await getMenu('rightMenu');
    setRightMenu(right);
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} component="a" href="/" title="theFront" width={{ xs: 100, md: 120 }}>
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      {mainMenu && (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          {mainMenu.map((item: PageItem, key: number) => (
            <Box key={key} marginLeft={4}>
              <NavItem title={item.title} id={`mainMenu-${item.id}`} items={item.items} colorInvert={colorInvert} />
            </Box>
          ))}
        </Box>
      )}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} component="a" href="/" title="theFront" width={{ xs: 100, md: 120 }}>
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://rameyroadeus01.blob.core.windows.net/westover-content/42bb860e-8200-415d-9fb8-605e274488ba-westover_icon.png'
              : 'https://rameyroadeus01.blob.core.windows.net/westover-content/42bb860e-8200-415d-9fb8-605e274488ba-westover_icon.png'
          }
          height={52}
          width={50}
        />
      </Box>
      {rightMenu && (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          {rightMenu.map((item: PageItem, key: number) => (
            <Box key={key} marginLeft={4}>
              <NavItem title={item.title} id={`mainMenu-${item.id}`} items={item.items} colorInvert={colorInvert} />
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
