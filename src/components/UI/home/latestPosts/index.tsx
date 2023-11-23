"use client";

import { Buttons } from "../buttons";
import { PostCard } from "./postCard/postCard";
import { Container, SectionTitle } from "./styles";
import { LoadingPostCard } from "./loadingPostCard/loadingPostCard";
import { useHasPageQuery, usePostsQuery } from "@/generated/graphql";

export function LatestPosts({
  searchParams,
}: {
  searchParams: { page: number; search: string };
}) {
  const { data, loading } = usePostsQuery({
    variables: {
      limit: 9,
      offset: (searchParams.page - 1) * 9,
      title: searchParams.search,
    },
  });

  const { data: hasPrevPage } = useHasPageQuery({
    variables: {
      limit: 1,
      offset: (searchParams.page - 2) * 9,
      title: searchParams.search,
    },
  });

  const { data: hasNextPage } = useHasPageQuery({
    variables: {
      limit: 1,
      offset: searchParams.page * 9,
      title: searchParams.search,
    },
  });

  return (
    <>
      <SectionTitle>Latest Posts</SectionTitle>;
      <Container>
        {loading
          ? new Array(9)
              .fill(0)
              .map((_, index) => <LoadingPostCard key={index} />)
          : data?.posts?.map((item) => <PostCard posts={item} key={item.id} />)}
      </Container>
      <Buttons.Root>
        {hasPrevPage ? (
          <Buttons.Button
            page={searchParams.page - 1}
            search={searchParams.search}
            text="Previous Page"
          />
        ) : (
          <div></div>
        )}
        {hasNextPage?.posts?.length ? (
          <Buttons.Button
            page={data?.posts?.length === 9 ? searchParams.page + 1 : -1}
            search={searchParams.search}
            text="Next Page"
          />
        ) : (
          <div></div>
        )}
      </Buttons.Root>
    </>
  );
}
