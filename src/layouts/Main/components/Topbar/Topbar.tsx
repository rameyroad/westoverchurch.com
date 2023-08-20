import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

interface Props {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSidebarOpen: () => void;
    primaryMenu: Array<PageItem>;
    secondaryMenu: Array<PageItem>;
    colorInvert?: boolean;
}

const Topbar = ({ onSidebarOpen, primaryMenu, secondaryMenu, colorInvert = false }: Props): JSX.Element => {
    const theme = useTheme();
    const { mode } = theme.palette;

    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }} component="a" href="/" title="theFront" width={{ xs: 100, md: 120 }}>
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
            {primaryMenu && (
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
                    {primaryMenu.map((item: PageItem, key: number) => (
                        <Box key={key} marginLeft={4}>
                            <NavItem item={item} id={`mainMenu-${item.id}`} colorInvert={colorInvert} />
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
            {secondaryMenu && (
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
                    {secondaryMenu.map((item: PageItem, key: number) => (
                        <Box key={key} marginLeft={4}>
                            <NavItem item={item} id={`mainMenu-${item.id}`} colorInvert={colorInvert} />
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
