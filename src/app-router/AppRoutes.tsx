import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import SuspenseWrapper from './SuspenseWrapper';
import WebsiteLayout from 'components/Layout/PublicLayout';
import Page404 from 'components/Page404';

// seller routes starts
const HomePage = React.lazy(
  /* webpackPrefetch: true */
  () => import('pages/home')
);

export const publicRoutes = [
  {
    path: '/home',
    component: <HomePage />,
  },
  {
    path: '/404',
    component: <Page404 />,
  },
];

function AppRoutes() {
  return (
    <Routes>
      <Route element={<WebsiteLayout />} path="/">
        {publicRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<SuspenseWrapper>{component}</SuspenseWrapper>}
          />
        ))}
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
