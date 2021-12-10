import React from 'react';
import type { NextPage } from 'next';
import { Nav } from './Nav';

interface LayoutProps {}

export const Layout: NextPage<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      <Nav />
      <main>{children}</main>
    </React.Fragment>
  );
};
