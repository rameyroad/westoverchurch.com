import React, { useState, useEffect, Fragment } from 'react';

import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import { IconMenuItem, NestedMenuItem } from 'mui-nested-menu';

import { SiteMapItem } from 'types/navigation/siteMapItem';

import './NaviItem.module.css';

interface NavItemBoxProps {
    id: string;
    item: SiteMapItem;
    activeLink: string;
    colorInvert?: boolean;
    handleClick?: (e: MouseEvent, id: string) => void;
}

const NavItemBox = ({ item, id, activeLink, colorInvert = false, handleClick }: NavItemBoxProps): JSX.Element => {
    const theme = useTheme();

    // const hasActiveLink = () => item.items?.find((i) => i.permaLink === activeLink);
    // const linkColor = colorInvert ? 'common.white' : 'text.primary';

    return (
        <Box display={'flex'} alignItems={'center'} aria-describedby={id} sx={{ cursor: 'pointer' }}>
            <Button
                component={'a'}
                href={`/${item.permaLink}`}
                fullWidth
                sx={{
                    justifyContent: 'flex-start',
                    // color: activeLink === item.permaLink ? theme.palette.primary.main : theme.palette.text.primary,
                    // backgroundColor: activeLink === item.permaLink ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                    // fontWeight: activeLink === item.permaLink ? 600 : 400,
                    color: theme.palette.text.primary,
                    backgroundColor: 'transparent',
                    fontWeight: 400,
                }}
            >
                <Typography fontWeight={400}>{item?.title} </Typography>
            </Button>
        </Box>
    );
};

interface NavItemProps {
    id: string;
    item: SiteMapItem;
    colorInvert?: boolean;
}

export const NavItem = ({ id, item, colorInvert = false }: NavItemProps): JSX.Element => {
    const theme = useTheme();

    const [activeLink, setActiveLink] = useState('');
    useEffect(() => {
        setActiveLink(window && window.location ? window.location.pathname : '');
    }, []);

    return (
        <Box>
            {item.items?.length === 0 ? (
                <NavItemBox item={item} id={id} activeLink={activeLink} colorInvert={colorInvert} />
            ) : (
                <Box
                    sx={{
                        color: activeLink === item.permaLink ? theme.palette.primary.main : theme.palette.text.primary,
                        backgroundColor: activeLink === item.permaLink ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                    }}
                >
                    <NestedMenuItem label={item.title} parentMenuOpen={true}>
                        {item.items.map((item: SiteMapItem, key: number) => (
                            <Fragment key={key}>
                                {item.items?.length === 0 ? (
                                    <NavItemBox item={item} id={id} activeLink={activeLink} colorInvert={colorInvert} />
                                ) : (
                                    <NestedMenuItem label={item.title} parentMenuOpen={true}>
                                        {item.items.map((item: SiteMapItem, key: number) => (
                                            <NavItemBox key={key} item={item} id={id} activeLink={activeLink} colorInvert={colorInvert} />
                                        ))}
                                    </NestedMenuItem>
                                )}
                            </Fragment>
                        ))}
                    </NestedMenuItem>
                </Box>
            )}
        </Box>
    );
};

export const NaviItem = ({ id, item, colorInvert = false }: NavItemProps): JSX.Element => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#home">Link1</a>
                <a href="#home">Link2</a>
                <a href="#home">Link3</a>
                <a href="#home">Link4</a>
            </div>
        </div>
    );
};
