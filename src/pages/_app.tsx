/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

import Page from '../components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextIntlClientProvider } from 'next-intl';

import 'aos/dist/aos.css';
import './styles/custom.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }): JSX.Element {
    const timeZone = 'Europe/Vienna';

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Westover Church</title>
            </Head>
            <Page>
                <NextIntlClientProvider timeZone={'America/New_York'} locale="en">
                    <Component {...pageProps} />
                </NextIntlClientProvider>
            </Page>
        </React.Fragment>
    );
}
