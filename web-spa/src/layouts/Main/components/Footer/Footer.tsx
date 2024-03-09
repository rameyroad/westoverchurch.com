import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon.png'
                  : 'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon.png'
              }
              height={52}
              width={50}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; 2023, Westover Church. All rights reserved
        </Typography>
        <Typography
          align={'left'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          <Link
            underline="none"
            component="a"
            href="#"
            color="text.primary"
            variant={'subtitle2'}
            sx={{ mr: 2 }}
          >
            Privacy Policy
          </Link>
          <Link
            underline="none"
            component="a"
            href="#"
            color="text.primary"
            variant={'subtitle2'}
            sx={{ mr: 2 }}
          >
            Site Map
          </Link>
          <Link
            underline="none"
            component="a"
            href="#"
            color="text.primary"
            variant={'subtitle2'}
            sx={{ mr: 2 }}
          >
            Share This
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
