import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Billing = (): JSX.Element => {
    return (
        <Box>
            <form>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                            Enter your card number
                        </Typography>
                        <TextField label="Card number *" variant="outlined" name={'cardNumber'} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                            Name on the card
                        </Typography>
                        <TextField label="Name *" variant="outlined" name={'name'} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                            Expiration date
                        </Typography>
                        <TextField label="Expiration date *" variant="outlined" name={'date'} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                            Billing zip code
                        </Typography>
                        <TextField label="Zip code *" variant="outlined" name={'zip'} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                            CVV
                        </Typography>
                        <TextField label="Card CVV *" variant="outlined" name={'cvv'} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item container xs={12}>
                        <Box
                            display="flex"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            alignItems={{ xs: 'stretched', sm: 'center' }}
                            justifyContent={'space-between'}
                            width={1}
                            margin={'0 auto'}
                        >
                            <Box marginBottom={{ xs: 1, sm: 0 }}>
                                <Typography variant={'subtitle2'}>
                                    You may also consider to update your{' '}
                                    <Link color={'primary'} href={'#'} underline={'none'}>
                                        private information.
                                    </Link>
                                </Typography>
                            </Box>
                            <Button size={'large'} variant={'contained'} type={'submit'}>
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default Billing;
