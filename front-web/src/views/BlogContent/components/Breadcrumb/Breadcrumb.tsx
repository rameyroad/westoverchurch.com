import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export type Breadcrumb = {
    href: string;
    title: string;
    isActive: boolean;
};

type BreadcrumbProps = {
    breadcrumbs: Array<Breadcrumb>;
};

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
    const { breadcrumbs } = props;

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumbs?.map((item, index) => (
                    <span key={index}>
                        {item.isActive ? (
                            <Typography color="text.primary">{item.title}</Typography>
                        ) : (
                            <Link
                                href={item.href}
                                sx={{
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                }}
                            >
                                {item.title}
                            </Link>
                        )}
                    </span>
                ))}
            </Breadcrumbs>
        </Box>
    );
};

export default Breadcrumb;
