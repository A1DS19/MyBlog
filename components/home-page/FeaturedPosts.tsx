import React from 'react';
import type { NextPage } from 'next';
import classes from './featured-posts.module.css';
import { PostsGrid } from '../posts/PostsGrid';
import { Post } from '../../types';

interface FeaturedPostsProps {
  posts: Post[];
}

export const FeaturedPosts: NextPage<FeaturedPostsProps> = ({ posts }): JSX.Element => {
  return (
    <React.Fragment>
      <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={posts} />
      </section>
    </React.Fragment>
  );
};
