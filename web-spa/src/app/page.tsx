'use client'; // This is a client component 👈🏽

import React, { useEffect } from 'react';

import { useRouter } from 'next/navigation';

// import IndexView from 'views/IndexView';

const IndexPage = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return <></>;
  // return <IndexView />;
};

export default IndexPage;
