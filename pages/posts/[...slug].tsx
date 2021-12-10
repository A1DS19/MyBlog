import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import React from 'react';
import { PostContent } from '../../detail/PostContent';
import { Post } from '../../types';
import { fetchEntrie, fetchEntries } from '../../util/contentFulPage';

const PostDetailPage: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{(post as Post).title}</title>
        <meta name='description' content={(post as Post).title} />
      </Head>
      <PostContent post={post as Post} />
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchEntries();
  const postSlugs = (posts as Post[])?.map((post: Post) => ({
    params: { slug: [`${post.id}/${post.slug}`] },
  }));

  return {
    paths: postSlugs,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (params!.slug?.length! < 2) {
    return {
      notFound: true,
    };
  }

  const [postId, postSlug] = params!.slug as string[];
  const post = await fetchEntrie(postId);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export default PostDetailPage;
