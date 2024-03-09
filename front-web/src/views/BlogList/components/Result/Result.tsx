import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';

import { getAllBlogPosts } from 'services/contentApi';
import { DynamicPost } from 'types/dynamicPage';

const Result = (): JSX.Element => {
    const theme = useTheme();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activePosts, setActivePosts] = useState<Array<DynamicPost>>([]);

    const getContent = async () => {
        setIsLoading(true);
        try {
            const pc = await getAllBlogPosts();
            setActivePosts(pc);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <Box>
            <Box padding={2} width={1} component={Card} boxShadow={4} marginBottom={4}>
                <form noValidate autoComplete="off">
                    <Box display="flex" alignItems={'center'}>
                        <Box width={1} marginRight={1}>
                            <TextField
                                sx={{
                                    height: 54,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '0 !important',
                                    },
                                }}
                                variant="outlined"
                                color="primary"
                                size="medium"
                                placeholder="Search an article"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Box
                                                component={'svg'}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                width={24}
                                                height={24}
                                                color={'primary.main'}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </Box>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box display={{ xs: 'none', sm: 'block' }} marginRight={2}>
                            <Typography color={'text.secondary'} variant={'subtitle2'} sx={{ whiteSpace: 'nowrap' }}>
                                123 Results
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                sx={{ height: 54, minWidth: 100, whiteSpace: 'nowrap' }}
                                variant="contained"
                                color="primary"
                                size="medium"
                                fullWidth
                            >
                                Search
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
            <Grid container spacing={4}>
                {activePosts?.length > 0 &&
                    activePosts.map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Box
                                component={'a'}
                                href={`/blog/${item.slug}`}
                                display={'block'}
                                width={1}
                                height={1}
                                sx={{
                                    textDecoration: 'none',
                                    transition: 'all .2s ease-in-out',
                                    '&:hover': {
                                        transform: `translateY(-${theme.spacing(1 / 2)})`,
                                    },
                                }}
                            >
                                <Box
                                    component={Card}
                                    width={1}
                                    height={1}
                                    boxShadow={4}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    sx={{ backgroundImage: 'none' }}
                                >
                                    <CardMedia
                                        image={item?.primaryImage?.media?.publicUrl}
                                        title={item.title}
                                        sx={{
                                            height: { xs: 300, md: 360 },
                                            position: 'relative',
                                        }}
                                    >
                                        <Box
                                            component={'svg'}
                                            viewBox="0 0 2880 480"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                color: theme.palette.background.paper,
                                                transform: 'scale(2)',
                                                height: 'auto',
                                                width: 1,
                                                transformOrigin: 'top center',
                                            }}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                                                fill="currentColor"
                                            />
                                        </Box>
                                    </CardMedia>
                                    <Box component={CardContent} position={'relative'}>
                                        <Typography variant={'h6'} gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography color="text.secondary">{item.excerpt}</Typography>
                                    </Box>
                                    <Box flexGrow={1} />
                                    <Box padding={2} display={'flex'} flexDirection={'column'}>
                                        <Box marginBottom={2}>
                                            <Divider />
                                        </Box>
                                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Box display={'flex'} alignItems={'center'}>
                                                {/* <Avatar src={item.regions.AuthorInfo.Name.value} sx={{ marginRight: 1 }} /> */}
                                                <Typography color={'text.secondary'}>{item.regions.AuthorInfo.Name.value}</Typography>
                                            </Box>
                                            <Typography color={'text.secondary'}>{item.published.toLocaleString('mmm dd, yyyy')}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                <Grid item container justifyContent={'center'} xs={12}>
                    <Button
                        fullWidth
                        variant={'outlined'}
                        size={'large'}
                        sx={{ height: 54, maxWidth: 400, justifyContent: 'space-between' }}
                        endIcon={
                            <Box
                                component={'svg'}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width={24}
                                height={24}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </Box>
                        }
                    >
                        Load more
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Result;
