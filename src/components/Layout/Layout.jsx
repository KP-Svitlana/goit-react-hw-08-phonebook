import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header />
      <h1 style={{ fontWeight: 500, fontSize: 38, textAlign: 'center' }}>
        Welcome to contacts list!
      </h1>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
