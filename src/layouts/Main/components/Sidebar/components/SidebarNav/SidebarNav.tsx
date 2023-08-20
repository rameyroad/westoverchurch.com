import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
    pages: Array<PageItem>;
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
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
            {pages && (
                <Box paddingX={2} paddingY={2}>
                    {pages.map((item: PageItem, key: number) => (
                        <Box key={key}>
                            <NavItem title={item.title} item={item} />
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default SidebarNav;
