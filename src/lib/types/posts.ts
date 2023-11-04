export type PostPreviewData = {
  posts: {
    __typename?: "Post";
    id: string;
    slug: string;
    title: string;
    date: any;
    coverImage: { __typename?: "Asset"; url: string };
    category: {
      __typename?: "Category";
      name: string;
      color: { __typename?: "Color"; hex: any };
    };
    author: {
      __typename?: "Author";
      name: string;
      picture: { __typename?: "Asset"; url: string };
    };
  };
};

export type PostData = {
  coverImage: string;
  category: {
    color: string;
    name: string;
  };
  title: string;
  author: {
    name: string;
    picture: string;
  };
  date: string;
  content: any;
};
