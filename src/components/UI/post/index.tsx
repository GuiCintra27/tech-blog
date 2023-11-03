"use client";

import { PostData } from "@/lib/types/posts";
import Image from "next/image";
import { PostHeader } from "./header";
import { Content } from "./content";

export default function PostContent({ postData }: PostData) {
  return (
    <>
      <PostHeader $category_background={postData.category.color}>
        <div className="category">
          <p>{postData.category.name}</p>
        </div>
        <div className="title">{postData.title}</div>
        <div className="postData">
          <div className="author">
            <Image
              src={postData.author.picture}
              alt=""
              height={28}
              width={28}
            />
            <p className="light-bold">{postData.author.name}</p>
          </div>
          <p>{postData.date}</p>
        </div>
      </PostHeader>
      <Content>
        <Image src={postData.coverImage} alt="" height={450} width={800} />

        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </Content>
    </>
  );
}
