import React from 'react';
import { useRouter } from 'next/router';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Content from 'views/Content/Content';

const ContentPage = (): JSX.Element => {
    const router = useRouter();
    return (
        <Main>
            <Container>
                <Content pageName={router.query.slug as string} />
            </Container>
        </Main>
    );
};

export default ContentPage;
