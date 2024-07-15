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
      minHeight={{ xs: 300, sm: 400, md: 650 }}
      display={'flex'}
      alignItems={'center'}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
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
        <Box
          sx={{
            borderRadius: 1,
            backgroundColor: 'rgba(255,255,255,0.5)',
            width: '70%',
            px: 2,
            py: 1,
            mt: 5,
          }}
        >
          {page?.excerpt && (
            <Typography
              fontSize={{ xs: 20, sm: 22, md: 24 }}
              fontWeight={600}
              component="p"
              sx={{
                color: '#3A474A',
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
