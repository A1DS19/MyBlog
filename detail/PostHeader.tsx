import React from 'react';
import type { NextPage } from 'next';
import classes from './post-header.module.css';
import Image from 'next/image';
import { Post } from '../types';

interface PostHeaderProps {
  post: Post;
}

export const PostHeader: NextPage<PostHeaderProps> = ({ post }): JSX.Element => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>{post.title}</h1>
        <Image
          src={`https:${post.image.fields.file.url}`}
          alt={post.title}
          width={200}
          height={200}
        />
      </header>
    </React.Fragment>
  );
};
