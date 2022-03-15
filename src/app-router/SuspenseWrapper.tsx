import Loader from 'components/Loader';
import React, { Suspense } from 'react';

function SuspenseWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <Loader />
      }
    >
      {children}
    </Suspense>
  );
}

export default SuspenseWrapper;
