import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { AllPosts } from '../../components/posts/AllPosts';
import { Post } from '../../types';
import { fetchEntries } from '../../util/contentFulPage';

const IndexPage = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>All my posts, yay</title>
        <meta name='description' content="All the posts I've created" />
      </Head>
      <AllPosts posts={allPosts} />
    </React.Fragment>
  );
};

export const getStaticProps = async ({}: GetStaticPropsContext) => {
  const posts = await fetchEntries();

  return {
    props: {
      allPosts: posts as Post[],
    },
    revalidate: 60,
  };
};

export default IndexPage;
