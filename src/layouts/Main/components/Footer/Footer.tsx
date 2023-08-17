import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = (): JSX.Element => {
    const theme = useTheme();
    const { mode } = theme.palette;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <Box display={'flex'} component="a" href="/" title="theFront" width={80}>
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
                    <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
                        {/* <Box marginTop={1} marginRight={2}>
              <Link underline="none" component="a" href="/" color="text.primary" variant={'subtitle2'}>
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link underline="none" component="a" href="/docs/introduction" color="text.primary" variant={'subtitle2'}>
                Documentation
              </Link>
            </Box> */}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Typography align={'center'} variant={'subtitle2'} color="text.secondary" gutterBottom>
                    &copy; 2023, Westover Church. All rights reserved
                </Typography>
                <Typography align={'left'} variant={'subtitle2'} color="text.secondary" gutterBottom>
                    <Link underline="none" component="a" href="#" color="text.primary" variant={'subtitle2'} sx={{ mr: 2 }}>
                        Privacy Policy
                    </Link>
                    <Link underline="none" component="a" href="#" color="text.primary" variant={'subtitle2'} sx={{ mr: 2 }}>
                        Site Map
                    </Link>
                    <Link underline="none" component="a" href="#" color="text.primary" variant={'subtitle2'} sx={{ mr: 2 }}>
                        Share This
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
