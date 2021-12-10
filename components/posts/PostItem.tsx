import React from 'react';
import type { NextPage } from 'next';
import classes from './post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../../types';

interface PostItemProps {
  post: Post;
}

export const PostItem: NextPage<PostItemProps> = ({ post }): JSX.Element => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <React.Fragment>
      <li className={classes.post}>
        <Link href={`/posts/${post.id}/${post.slug}`}>
          <a>
            <div className={classes.image}>
              <Image
                src={`https:${post.image.fields.file.url}`}
                alt={post.title}
                width={300}
                height={360}
                layout='responsive'
              />
            </div>
            <div className={classes.content}>
              <h3>{post.title}</h3>
              <time>{formattedDate}</time>
              {/* <p>{post.excerpt.}</p> */}
            </div>
          </a>
        </Link>
      </li>
    </React.Fragment>
  );
};
