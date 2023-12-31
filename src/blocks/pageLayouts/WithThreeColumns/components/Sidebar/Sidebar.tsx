import React from 'react';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { SidebarNav } from './components';

interface Props {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onClose: () => void;
    open: boolean;
    variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}

const Sidebar = ({ open, variant, onClose }: Props): JSX.Element => {
    const theme = useTheme();
    return (
        <Drawer
            anchor="left"
            onClose={() => onClose()}
            open={open}
            variant={variant}
            sx={{
                '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: 256,
                    top: { xs: 0, md: 71 },
                    height: { xs: '100%', md: 'calc(100% - 71px)' },
                    background: theme.palette.alternate.main,
                },
            }}
        >
            <SidebarNav />
        </Drawer>
    );
};

export default Sidebar;
