import * as contentful from 'contentful';
import { Post } from '../types';

const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;

const client = contentful.createClient({
  accessToken,
  space,
});

export const fetchEntries = async () => {
  //const res = await client.getContentType('page');
  const entries = await client.getEntries();

  const posts = entries?.items?.map((entrie) => {
    return {
      id: entrie.sys.id,
      ...(entrie.fields as Partial<Post>),
    };
  });

  if (entries.items) {
    return posts;
  }
};

export const fetchEntrie = async (id: string) => {
  try {
    const data = await client.getEntry(id);
    const post = {
      id: data.sys.id,
      ...(data.fields as Partial<Post>),
    };

    if (post) {
      return post;
    }
  } catch (error) {
    console.log(error);
  }
};
