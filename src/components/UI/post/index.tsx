"use client";

import Image from "next/image";
import { PostHeader } from "./header";
import { Content } from "./content";
import { usePostQuery } from "@/generated/graphql";
import { LoadingPost } from "./loadingPost";
import { SkeletonLoading } from "@/components/common/loading";
import { getDate } from "@/utils/date-util";
import { postLoadingSizes } from "@/utils/loading-util";

export default function PostContent({ slug }: { slug: string }) {
  const { data, loading } = usePostQuery({
    variables: {
      slug: slug,
    },
  });

  return (
    <>
      <PostHeader
        $category_background={data?.post ? data?.post?.category?.color.hex : ""}
      >
        {loading ? (
          <LoadingPost />
        ) : (
          <>
            <div className="category">
              <p>{data?.post?.category?.name}</p>
            </div>
            <div className="title">{data?.post?.title}</div>
            <div className="postData">
              <div className="author">
                <Image
                  src={data?.post?.author?.picture ? data?.post?.author?.picture?.url : "/icons/undefined-user.png"}
                  alt=""
                  height={28}
                  width={28}
                />
                <p className="light-bold">{data?.post?.author?.name}</p>
              </div>
              <p>
                {getDate(data?.post ? data.post.date : "")}
              </p>
            </div>
          </>
        )}
      </PostHeader>
      <Content>
        {loading ? (
          postLoadingSizes.map((item, index) => (
            <SkeletonLoading
              key={index}
              {...item}
              style={{ marginBottom: item.$margin_bottom }}
            />
          ))
        ) : (
          <>
            <Image
              src={data?.post ? data.post.coverImage.url : ""}
              alt=""
              height={450}
              width={800}
              priority
            />
            <div
              dangerouslySetInnerHTML={{
                __html: data?.post ? data.post.content.markdown : <div />,
              }}
            />
          </>
        )}
      </Content>
    </>
  );
}
