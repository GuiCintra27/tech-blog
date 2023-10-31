"use client";

import styled from "styled-components";
import { PostCard } from "./postCard";
import { PostPreviewData } from "@/lib/types/posts";

export function LatestPosts({ postPreviewData }: PostPreviewData) {
  const arr = new Array(10).fill(postPreviewData);

  return (
    <>
      <SectionTitle>Latest Posts</SectionTitle>;
      <Container>
        {arr.map((item, index) => (
          <PostCard postPreviewData={item} key={index} />
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
