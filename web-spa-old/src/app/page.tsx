'use client'; // This is a client component 👈🏽

import { Fragment, useEffect } from 'react';

import { useRouter } from 'next/navigation';

// import IndexView from 'views/IndexView';

const IndexPage = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return <Fragment></Fragment>;
};

export default IndexPage;
