import React from 'react';

import { Box, Divider, Grid, Link, Typography } from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Stack } from '@mui/material';

const Footer = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
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
                'https://westovercontent.blob.core.windows.net/cmscontent/assets/westover_icon.png'
              }
              height={52}
              width={50}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={11}>
        <Stack direction={'row'} spacing={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 3,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Westover Church
            </Typography>
            <Link
              underline="none"
              component="a"
              href="https://maps.app.goo.gl/ASkBHew4sSoKtJ8D8"
              target="_blank"
              color="text.primary"
              variant={'subtitle2'}
            >
              <Stack direction={'row'} spacing={1}>
                <LocationOnIcon fontSize="medium" />
                <Typography variant="subtitle2" gutterBottom>
                  505 Muirs Chapel Road
                  <br />
                  Greensboro, NC 27410
                  <br />
                </Typography>
              </Stack>
            </Link>
            <Typography variant="subtitle2" sx={{ mt: 1 }}>
              <Stack
                direction={'row'}
                spacing={1}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Link
                  underline="none"
                  component="a"
                  href="tel:+1-336-299-7374"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  <Stack direction={'row'} spacing={1}>
                    <PhoneIcon fontSize="small" />
                    (336) 299-7374
                  </Stack>
                </Link>
                <Link
                  underline="none"
                  component="a"
                  href="tel:+1-336-299-8522"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  <Stack direction={'row'} spacing={1}>
                    <FaxIcon fontSize="small" />
                    (336) 299-8522
                  </Stack>
                </Link>
              </Stack>
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: 'gray',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 7,
            }}
          >
            Follow us
          </Box>
        </Stack>
      </Grid>

      <Stack
        direction={'row'}
        spacing={2}
        sx={{ mt: 3, display: 'flex', flex: 6 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flex: 3 }}>
          <Typography variant={'subtitle2'} color="text.secondary" gutterBottom>
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
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 3 }}>
          <Typography variant={'subtitle2'} color="text.secondary">
            &copy; {new Date().getFullYear()}, Westover Church. All rights
            reserved
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default Footer;
