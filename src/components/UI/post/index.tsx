"use client";

import Image from "next/image";
import { PostHeader } from "./header";
import { Content } from "./content";
import { usePostQuery } from "@/generated/graphql";
import { months } from "@/lib/constants/months";
import { LoadingPost } from "./loadingPost";
import { SkeletonLoading } from "@/components/common/loading";

export default function PostContent({ slug }: { slug: string }) {
  const { data, loading } = usePostQuery({
    variables: {
      slug: slug,
    },
  });

  const loadingSizes = [
    {
      $width: "100%",
      $height: "45rem",
      $border_radius: "1.2rem",
      $margin_bottom: "1.5rem",
    },
    {
      $width: "100%",
      $height: "10rem",
      $border_radius: ".6rem",
      $margin_bottom: "3rem",
    },
    {
      $width: "100%",
      $height: "10rem",
      $border_radius: ".6rem",
      $margin_bottom: "3rem",
    },
    {
      $width: "9rem",
      $height: "3rem",
      $border_radius: ".6rem",
      $margin_bottom: "2rem",
    },
    {
      $width: "100%",
      $height: "10rem",
      $border_radius: ".6rem",
      $margin_bottom: "3rem",
    },
    {
      $width: "100%",
      $height: "10rem",
      $border_radius: ".6rem",
      $margin_bottom: "3rem",
    },
  ];

  return (
    <>
      <PostHeader
        $category_background={data?.post ? data.post.category.color.hex : ""}
      >
        {loading ? (
          <LoadingPost />
        ) : (
          <>
            <div className="category">
              <p>{data?.post?.category.name}</p>
            </div>
            <div className="title">{data?.post?.title}</div>
            <div className="postData">
              <div className="author">
                <Image
                  src={data?.post ? data.post.author.picture.url : ""}
                  alt=""
                  height={28}
                  width={28}
                />
                <p className="light-bold">{data?.post?.author.name}</p>
              </div>
              <p>
                {`${months[new Date(data?.post?.date).getMonth()]} 
                  ${new Date(data?.post?.date).getDate()}, 
                  ${new Date(data?.post?.date).getFullYear()}`}
              </p>
            </div>
          </>
        )}
      </PostHeader>
      <Content>
        {loading ? (
          loadingSizes.map((item, index) => (
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
