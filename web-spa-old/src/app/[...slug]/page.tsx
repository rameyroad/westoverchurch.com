'use client'; // This is a client component 👈🏽

import React, { Fragment, useEffect } from 'react';
import Content from 'views/Content';

const ContentPage = ({ params }: { params: { slug: string } }): JSX.Element => {
  const [pageSlug, setPageSlug] = React.useState<string>('');

  useEffect(() => {
    if (params.slug.length > 0) {
      setPageSlug([...params.slug].join('/'));
    }
  }, [params]);

  useEffect(() => {}, [pageSlug]);

  return (
    <Fragment>{pageSlug != '' && <Content pageName={pageSlug} />}</Fragment>
  );
};

export default ContentPage;
