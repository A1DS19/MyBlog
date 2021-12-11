import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import { FeaturedPosts } from '../components/home-page/FeaturedPosts';
import { Hero } from '../components/home-page/Hero';
import { Post } from '../types';
import { fetchEntries } from '../util/contentFulPage';
import Head from 'next/head';

const IndexPage = ({
  featuredPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{"Jose's Blog"}</title>
        <meta name='description' content='My new blog' />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </React.Fragment>
  );
};

export const getStaticProps = async ({}: GetStaticPropsContext) => {
  const posts = await fetchEntries();
  const featuredPosts = (posts as Post[])?.filter(
    (post: Post) => post.isFeatured === true
  );

  return {
    props: {
      featuredPosts: featuredPosts as Post[],
    },
    revalidate: 60,
  };
};

export default IndexPage;
