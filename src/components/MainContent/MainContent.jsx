import { Main } from './MainContent.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export function MainContent() {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Main>
  );
}