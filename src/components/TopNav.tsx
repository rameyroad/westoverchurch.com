import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ThemeModeToggler from 'components/ThemeModeToggler';

interface Props {
    colorInvert?: boolean;
}

const TopNav = ({ colorInvert = false }: Props): JSX.Element => {
    return (
        <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
            <Box marginRight={{ xs: 1, sm: 2 }}>
                <Link
                    underline="none"
                    component="a"
                    href="#"
                    color={colorInvert ? 'common.white' : 'text.primary'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    Give
                </Link>
            </Box>
            <Box marginRight={{ xs: 1, sm: 2 }}>
                <Link
                    underline="none"
                    component="a"
                    href="https://westoverchurch.tpsdb.com/Logon?ReturnUrl=%2f"
                    target="_blank"
                    color={colorInvert ? 'common.white' : 'text.primary'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    My Westover
                </Link>
            </Box>
            <Box>
                <ThemeModeToggler />
            </Box>
        </Box>
    );
};

export default TopNav;
