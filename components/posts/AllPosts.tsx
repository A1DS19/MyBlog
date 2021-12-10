import React from 'react';
import type { NextPage } from 'next';
import classes from './all-posts.module.css';
import { PostsGrid } from './PostsGrid';
import { Post } from '../../types';

interface AllPostsProps {
  posts: Post[];
}

export const AllPosts: NextPage<AllPostsProps> = ({ posts }): JSX.Element => {
  return (
    <React.Fragment>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
      </section>
    </React.Fragment>
  );
};
