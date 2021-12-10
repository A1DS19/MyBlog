import React from 'react';
import type { NextPage } from 'next';
import classes from './post-content.module.css';
import { PostHeader } from './PostHeader';
import { Post } from '../types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';

interface PostContentProps {
  post: Post;
}

const renderOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <Image
          src={`https://${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.title}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
        />
      );
    },
  },
};

export const PostContent: NextPage<PostContentProps> = ({ post }): JSX.Element => {
  return (
    <React.Fragment>
      <article className={classes.content}>
        <PostHeader post={post} />
        {post.excerpt.content.map((content, index) => {
          return (
            <React.Fragment key={index}>
              {documentToReactComponents(content as any, renderOptions)}
            </React.Fragment>
          );
        })}
      </article>
    </React.Fragment>
  );
};
