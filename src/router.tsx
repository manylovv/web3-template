import { Fragment } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { RootPage } from './pages';
import { HomePage } from './pages/home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<RootPage />}>
        <Route path="" element={<HomePage />} />
      </Route>
    </Fragment>
  )
);
