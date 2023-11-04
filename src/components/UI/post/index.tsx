"use client";

import { PostData } from "@/lib/types/posts";
import Image from "next/image";
import { PostHeader } from "./header";
import { Content } from "./content";
import { PostQuery, usePostQuery } from "@/generated/graphql";
import { Suspense, useEffect, useState } from "react";

export default function PostContent({ slug }: { slug: string }) {
  const { data } = usePostQuery({
    variables: {
      slug: slug,
    },
  });

  const loadingGif = "https://media1.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif";

  const [postData, setPostData] = useState<PostData | undefined>(undefined);

  useEffect(() => {
    if(data?.post){
      const {coverImage, category, content, title, author, date} = data.post
      setPostData({
        coverImage: coverImage!.url.toString(),
        category: {
            color: category!.color.toString(),
            name: category!.name,
        },
        title,
        author: {
            name: author!.name,
            picture: author!.picture!.url,
        },
        date,
        content: content.markdown,
      })
    }
  }, [data])

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>

      <PostHeader
        $category_background={postData? postData.category.color : ""}
      >
        <div className="category">
          <p>{postData?.category.name}</p>
        </div>
        <div className="title">{data?.post?.title}</div>
        <div className="postData">
          <div className="author">
            <Image
              src={postData? postData.author.picture : loadingGif}
              alt=""
              height={28}
              width={28}
            />
            <p className="light-bold">{postData?.author.name}</p>
          </div>
          <p>{postData?.date}</p>
        </div>
      </PostHeader>
    </Suspense>
      <Content>
        <Image src={postData ? postData.coverImage : loadingGif} alt="" height={450} width={800} />

        <div dangerouslySetInnerHTML={{ __html: postData?.content }} />
      </Content>
    </>
  );
}
