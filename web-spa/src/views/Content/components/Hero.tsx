import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import Container from 'components/Container';
import { DynamicPage } from 'types/dynamicPage';

interface Props {
  page: DynamicPage;
}

export const Hero = ({ page }: Props): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 300, sm: 400, md: 500 }}
      display={'flex'}
      alignItems={'center'}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: `url('${page?.primaryImage?.media?.publicUrl}')`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.4),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'common.white',
              textTransform: 'uppercase',
            }}
          >
            {page?.title}
          </Typography>
          {page?.excerpt && (
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                color: 'common.white',
              }}
            >
              {page.excerpt}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};
