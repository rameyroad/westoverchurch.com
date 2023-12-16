import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';
import { SiteMapItem } from 'types/navigation/siteMapItem';

interface Props {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onClose: () => void;
    open: boolean;
    variant: 'permanent' | 'persistent' | 'temporary' | undefined;
    items: Array<SiteMapItem>;
}

const Sidebar = ({ items, open, variant, onClose }: Props): JSX.Element => {
    return (
        <Drawer
            anchor="left"
            onClose={() => onClose()}
            open={open}
            variant={variant}
            sx={{
                '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: 280,
                },
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    padding: 1,
                }}
            >
                <SidebarNav items={items} />
            </Box>
        </Drawer>
    );
};

export default Sidebar;
