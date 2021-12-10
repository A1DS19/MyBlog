import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import logoClasses from './logo.module.css';
import navClasses from './nav.module.css';

interface NavProps {}

export const Nav: NextPage<NavProps> = (): JSX.Element => {
  return (
    <React.Fragment>
      <header className={navClasses.header}>
        <Link href='/'>
          <a>
            <div className={logoClasses.logo}>My Blog</div>
          </a>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href='/posts'>Posts</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};
