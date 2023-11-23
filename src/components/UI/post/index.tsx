"use client";

import { Content } from "./content/content";
import { usePostQuery } from "@/generated/graphql";
import { PostHeader } from "./postHeader/postHeader";

export default function PostContent({ slug }: { slug: string }) {
  const { data, loading } = usePostQuery({
    variables: {
      slug: slug,
    },
  });

  return (
    <>
      <PostHeader data={data} loading={loading} />
      <Content data={data} loading={loading} />
    </>
  );
}
