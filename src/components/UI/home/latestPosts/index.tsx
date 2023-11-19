"use client";

import styled from "styled-components";

import { Buttons } from "../buttons";
import { PostCard } from "./postCard";
import { usePostsQuery } from "@/generated/graphql";
import { LoadingPostCard } from "./loadingPostCard";

export function LatestPosts({
  searchParams,
}: {
  searchParams: { page: number; search: string };
}) {
  const { data, loading } = usePostsQuery({
    variables: {
      limit: 9,
      offset: (searchParams.page - 1) * 9,
    }
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
        <Buttons.Button
          page={searchParams.page - 1}
          search={searchParams.search}
          text="Previous Page"
        />
        <Buttons.Button
          page={data?.posts?.length === 9 ? searchParams.page + 1 : -1}
          search={searchParams.search}
          text="Next Page"
        />
      </Buttons.Root>
    </>
  );
}

const SectionTitle = styled.p`
  margin-bottom: 3.2rem;

  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.8rem; /* 116.667% */
`;

const Container = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 2rem;
`;
