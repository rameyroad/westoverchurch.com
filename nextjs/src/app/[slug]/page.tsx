'use client'; // This is a client component 👈🏽

import React from 'react';
import Content from 'views/Content';

const ContentPage = ({ params }: { params: { slug: string } }): JSX.Element => {
    return <Content pageName={params.slug} />;
};

export default ContentPage;
