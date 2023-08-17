import React from 'react';
import { useRouter } from 'next/router';

import BlogContent from 'views/BlogContent';

const ContentPage = (): JSX.Element => {
    const router = useRouter();
    return <BlogContent postName={router.query.slug as string} />;
};

export default ContentPage;
