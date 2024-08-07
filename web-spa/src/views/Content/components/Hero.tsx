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
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
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
        {page.showTitle && (
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
        )}
        {page.showExcerpt && page?.excerpt && (
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: 'rgba(255,255,255,0.75)',
              width: '70%',
              px: 2,
              py: 3,
              mt: 5,
            }}
          >
            <Typography
              fontSize={{ xs: 20, sm: 22, md: 24 }}
              fontWeight={600}
              component="p"
              sx={{
                color: '#415058',
              }}
            >
              {page.excerpt}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};
