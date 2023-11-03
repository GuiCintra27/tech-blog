export type PostPreviewData = {
  postPreviewData: {
    id: number;
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
  };
};

export type PostData = {
  postData: {
    id: number;
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
    content: string;
  };
}
