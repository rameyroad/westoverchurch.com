import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface SingleItemProps {
    item: PageItem;
    activeLink: string;
}

const SingleItem = ({ item, activeLink }: SingleItemProps): JSX.Element => {
    const theme = useTheme();
    return (
        <Button
            size={'large'}
            component={'a'}
            href={item.href}
            fullWidth
            sx={{
                justifyContent: 'flex-start',
                color: activeLink === item?.href ? theme.palette.primary.main : theme.palette.text.primary,
                backgroundColor: activeLink === item?.href ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                fontWeight: 400,
                paddingLeft: 0,
            }}
        >
            <Typography fontWeight={400} color={'text.primary'}>
                {item.title}
            </Typography>
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
    title: string;
    item: PageItem;
}

const NavItem = ({ title, item }: NavItemProps): JSX.Element => {
    const theme = useTheme();
    const [activeLink, setActiveLink] = useState('');
    useEffect(() => {
        setActiveLink(window && window.location ? window.location.pathname : '');
    }, []);

    const hasActiveLink = () => item.items?.find((i) => i.href === activeLink);

    return (
        <Box>
            {item.items?.length ? (
                <Accordion disableGutters elevation={0} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={item.items?.length > 0 && <ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ padding: 0 }}
                    >
                        <Typography fontWeight={hasActiveLink() ? 600 : 400} color={hasActiveLink() ? 'primary' : 'text.primary'}>
                            {title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                        <Grid container spacing={1}>
                            {item.items?.map((p, i) => (
                                <Grid item key={i} xs={12}>
                                    <Button
                                        size={'large'}
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
                    </AccordionDetails>
                </Accordion>
            ) : (
                <SingleItem item={item} activeLink={activeLink}></SingleItem>
            )}
        </Box>
    );
};

export default NavItem;
