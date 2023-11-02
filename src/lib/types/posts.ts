export type PostPreviewData = {
  postPreviewData: {
    id: number;
    imageUrl: string;
    category: {
      color: string;
      name: string;
    };
    title: string;
    author: {
      name: string;
      avatarUrl: string;
    };
    date: string;
  };
};

export type PostData = {
  postData: {
    id: number;
    imageUrl: string;
    category: {
      color: string;
      name: string;
    };
    title: string;
    author: {
      name: string;
      avatarUrl: string;
    };
    date: string;
    content: string;
  };
}
