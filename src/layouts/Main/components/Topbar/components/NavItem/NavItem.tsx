import React, { useState, useEffect, Fragment } from 'react';

import { Box, Button, Grid, Popover, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha, useTheme } from '@mui/material/styles';

import { SiteMapItem } from 'types/navigation/siteMapItem';

interface SingleItemProps {
    item: SiteMapItem;
}

const SingleItem = ({ item }: SingleItemProps): JSX.Element => {
    const theme = useTheme();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(window && window.location ? window.location.pathname : '');
    }, []);

    return (
        <Button
            component={'a'}
            href={item.permalink}
            fullWidth
            sx={{
                justifyContent: 'flex-start',
                color: activeLink === item.permalink ? theme.palette.primary.main : theme.palette.text.primary,
                backgroundColor: activeLink === item.permalink ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                fontWeight: activeLink === item.permalink ? 600 : 400,
            }}
        >
            <Typography fontWeight={400}>{item?.title}</Typography>
            {/* {item && (
                <Box padding={0.5} display={'inline-flex'} borderRadius={1} bgcolor={'primary.main'} marginLeft={2}>
                    <Typography variant={'caption'} sx={{ color: 'common.white', lineHeight: 1 }}>
                        new
                    </Typography>
                </Box>
            )} */}
        </Button>
    );
};

interface NavItemProps {
    id: string;
    item: SiteMapItem;
    colorInvert?: boolean;
}

interface NavItemBoxProps {
    id: string;
    item: SiteMapItem;
    openedPopoverId: string;
    activeLink: string;
    colorInvert?: boolean;
    level?: number;
    handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, popoverId: string) => void;
}

const NavItemBox = ({ item, id, activeLink, openedPopoverId, level, colorInvert = false, handleClick }: NavItemBoxProps): JSX.Element => {
    const theme = useTheme();

    const hasActiveLink = () => item.items?.find((i) => i.permalink === activeLink);
    const linkColor = colorInvert ? 'common.white' : 'text.primary';

    return (
        <Box display={'flex'} alignItems={'center'} aria-describedby={id} sx={{ cursor: 'pointer' }} onClick={(e) => handleClick(e, id)}>
            {level === 1 && item.items?.length !== 0 ? (
                <Fragment>
                    <Typography fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 400} color={linkColor}>
                        {item?.title} {level}
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
                </Fragment>
            ) : (
                <SingleItem item={item} />
            )}
        </Box>
    );
};

const NavItem = ({ id, item, colorInvert = false }: NavItemProps): JSX.Element => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [openedPopoverId, setOpenedPopoverId] = useState(null);

    const handleClick = (event, popoverId) => {
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

    return (
        <Box>
            <NavItemBox
                item={item}
                id={id}
                activeLink={activeLink}
                openedPopoverId={openedPopoverId}
                level={1}
                colorInvert={colorInvert}
                handleClick={handleClick}
            />
            {item.items?.length !== 0 && (
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
                            maxWidth: item.items?.length > 12 ? 350 : 250,
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
                        {item.items?.map((item, i) => (
                            <Grid item key={i} xs={item.items.length > 12 ? 6 : 12}>
                                <NavItemBox
                                    item={item}
                                    id={id}
                                    activeLink={activeLink}
                                    openedPopoverId={openedPopoverId}
                                    level={2}
                                    colorInvert={colorInvert}
                                    handleClick={handleClick}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Popover>
            )}
        </Box>
    );
};

export default NavItem;
