export type Post = {
  id: string;
  createdAt: Date;
  excerpt: {
    content: [
      {
        content: any[];
      }
    ];
  };
  image: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  isFeatured: boolean;
  slug: string;
  title: string;
};
