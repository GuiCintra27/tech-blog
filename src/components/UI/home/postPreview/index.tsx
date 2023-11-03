"use client";

import styled from "styled-components";
import { BgImage } from "./backgroundImage";
import { DataCard } from "./dataCard";
import { PostPreviewData } from "@/lib/types/posts";

export function PostPreview({ postPreviewData }: PostPreviewData) {
  const { coverImage, category, title, author, date } = postPreviewData;
  return (
    <Container>
      <BgImage url={coverImage} />
      <DataCard category={category} author={author} title={title} date={date} />
    </Container>
  );
}

const Container = styled.div`
  margin: 2.4rem auto 14.4rem auto;
  position: relative;
`;
