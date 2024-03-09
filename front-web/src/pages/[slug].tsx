import React from 'react';
import { useRouter } from 'next/router';

import Content from 'views/Content/Content';

const ContentPage = (): JSX.Element => {
    const router = useRouter();
    return <Content pageName={router.query.slug as string} />;
};

export default ContentPage;
