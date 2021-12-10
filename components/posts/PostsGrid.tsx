import React from 'react';
import type { NextPage } from 'next';
import classes from './post-grid.module.css';
import { PostItem } from './PostItem';
import { Post } from '../../types';

interface PostsGridProps {
  posts: Post[];
}

export const PostsGrid: NextPage<PostsGridProps> = ({ posts }): JSX.Element => {
  return (
    <React.Fragment>
      <ul className={classes.grid}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </React.Fragment>
  );
};
