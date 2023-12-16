import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { SiteMapItem } from 'types/navigation/siteMapItem';
import NavItem from 'layouts/Main/components/Topbar/components/NavItem';

interface SidebarNavProps {
    items: Array<SiteMapItem>;
    colorInvert?: boolean;
}

const SidebarNav = ({ items, colorInvert = false }: SidebarNavProps): JSX.Element => {
    const theme = useTheme();
    const { mode } = theme.palette;

    return (
        <Box>
            <Box width={1} paddingX={2} paddingY={1}>
                <Box display={'flex'} component="a" href="/" title="theFront" width={{ xs: 100, md: 120 }}>
                    <Box
                        component={'img'}
                        src={
                            mode === 'light'
                                ? 'https://rameyroadeus01.blob.core.windows.net/westover-content/42bb860e-8200-415d-9fb8-605e274488ba-westover_icon.png'
                                : 'https://rameyroadeus01.blob.core.windows.net/westover-content/42bb860e-8200-415d-9fb8-605e274488ba-westover_icon.png'
                        }
                        height={52}
                        width={50}
                    />
                </Box>
            </Box>
            {items && (
                <Box paddingX={2} paddingY={2}>
                    {items.map((item: SiteMapItem, key: number) => (
                        <Box key={key}>
                            <NavItem item={item} id={`mainMenu-${item.id}`} colorInvert={colorInvert} />
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default SidebarNav;
