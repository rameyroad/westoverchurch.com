import React, { useState, useEffect, Fragment } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SingleItemProps {
    item: PageItem;
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
            href={item.href}
            fullWidth
            sx={{
                justifyContent: 'flex-start',
                color: activeLink === item.href ? theme.palette.primary.main : theme.palette.text.primary,
                backgroundColor: activeLink === item.href ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                fontWeight: activeLink === item.href ? 600 : 400,
            }}
        >
            <Typography fontWeight={400}>{item?.title}</Typography>
            {item.isNew && (
                <Box padding={0.5} display={'inline-flex'} borderRadius={1} bgcolor={'primary.main'} marginLeft={2}>
                    <Typography variant={'caption'} sx={{ color: 'common.white', lineHeight: 1 }}>
                        new
                    </Typography>
                </Box>
            )}
        </Button>
    );
};

interface NavItemProps {
    id: string;
    item: PageItem;
    colorInvert?: boolean;
}

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

    const hasActiveLink = () => item.items?.find((i) => i.href === activeLink);
    const linkColor = colorInvert ? 'common.white' : 'text.primary';

    return (
        <Box>
            <Box display={'flex'} alignItems={'center'} aria-describedby={id} sx={{ cursor: 'pointer' }} onClick={(e) => handleClick(e, id)}>
                {item.items ? (
                    <Fragment>
                        <Typography fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 400} color={linkColor}>
                            {item?.title}
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
                        {item.items?.map((p, i) => (
                            <Grid item key={i} xs={item.items.length > 12 ? 6 : 12}>
                                <Button
                                    component={'a'}
                                    href={p.href}
                                    fullWidth
                                    sx={{
                                        justifyContent: 'flex-start',
                                        color: activeLink === p.href ? theme.palette.primary.main : theme.palette.text.primary,
                                        backgroundColor: activeLink === p.href ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                                        fontWeight: activeLink === p.href ? 600 : 400,
                                    }}
                                >
                                    {p.title}
                                    {p.isNew && (
                                        <Box padding={0.5} display={'inline-flex'} borderRadius={1} bgcolor={'primary.main'} marginLeft={2}>
                                            <Typography variant={'caption'} sx={{ color: 'common.white', lineHeight: 1 }}>
                                                new
                                            </Typography>
                                        </Box>
                                    )}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Popover>
            )}
        </Box>
    );
};

export default NavItem;
