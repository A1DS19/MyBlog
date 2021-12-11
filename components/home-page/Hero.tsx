import React from 'react';
import type { NextPage } from 'next';
import classes from './hero.module.css';
import Image from 'next/image';

interface HeroProps {}

export const Hero: NextPage<HeroProps> = ({}): JSX.Element => {
  return (
    <React.Fragment>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image src={'/god.jpg'} alt={'me'} width={300} height={300} />
        </div>
        <h1>{"Hello, I'm Jose"}</h1>
        <p>This is my blog...</p>
      </section>
    </React.Fragment>
  );
};
