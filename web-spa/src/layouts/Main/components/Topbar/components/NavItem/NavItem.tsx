import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import { Box, Grid, Popover, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SiteMapItem } from '@/types/navigation/siteMapItem';

interface Props {
  title: string;
  id: string;
  item: SiteMapItem;
  items: Array<SiteMapItem>;
  colorInvert?: boolean;
}

const NavItem = ({
  title,
  id,
  item,
  items,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event: any, popoverId: any) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () =>
    items && items.find((i) => i.permaLink === activeLink);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
        onClick={(e) => handleClick(e, id)}
        onMouseEnter={(e) => handleClick(e, id)}
      >
        {items?.length > 0 ? (
          <>
            <Typography
              fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 400}
              color={linkColor}
            >
              {title}
            </Typography>
            <ExpandMoreIcon
              sx={{
                marginLeft: theme.spacing(1 / 4),
                width: 16,
                height: 16,
                transform: openedPopoverId === id ? 'rotate(180deg)' : 'none',
                color: linkColor,
              }}
            />
          </>
        ) : (
          <Box
            sx={{
              justifyContent: 'flex-start',
              color:
                activeLink === item.permaLink
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              backgroundColor:
                activeLink === item.permaLink
                  ? alpha(theme.palette.primary.main, 0.1)
                  : 'transparent',
              fontWeight: activeLink === item.permaLink ? 600 : 400,
            }}
          >
            <Link href={'/' + item.permaLink} className="nav-item">
              {item.title}
            </Link>
          </Box>
        )}
      </Box>
      {items?.length > 0 && (
        <Popover
          elevation={3}
          id={id}
          open={openedPopoverId === id}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            '.MuiPaper-root': {
              maxWidth: items?.length > 12 ? 350 : 250,
              padding: 2,
              marginTop: 2,
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
              borderTop: `3px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          <Grid container spacing={0.5}>
            {items?.map((item, i) => (
              <Grid item key={i} xs={items?.length > 12 ? 6 : 12}>
                <Box
                  sx={{
                    minHeight: 32,
                    justifyContent: 'flex-start',
                    color:
                      activeLink === item.permaLink
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === item.permaLink
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === item.permaLink ? 600 : 400,
                  }}
                >
                  <Link href={'/' + item.permaLink} className="nav-item">
                    {item.title}
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Popover>
      )}
    </Box>
  );
};

export default NavItem;
