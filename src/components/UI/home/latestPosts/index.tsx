"use client";

import styled from "styled-components";
import { PostCard } from "./postCard";
import { usePostsQuery } from "@/generated/graphql";

export function LatestPosts() {
  const { data } = usePostsQuery();

  return (
    <>
      <SectionTitle>Latest Posts</SectionTitle>;
      <Container>
        {data?.posts?.map((item) => (
          <PostCard posts={item} key={item.id} />
        ))}
      </Container>
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
