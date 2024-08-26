'use client'; // This is a client component 👈🏽

import Content from '@/views/Content';
import React, { Fragment, useEffect } from 'react';

const ContentPage = ({ params }: { params: { slug: string } }): JSX.Element => {
  useEffect(() => {
    if (params.slug.length > 0) {
    }
  }, [params]);

  useEffect(() => {}, [params.slug]);

  return (
    <Fragment>
      {params.slug != '' && <Content pageName={params.slug} />}
    </Fragment>
  );
};

export default ContentPage;
