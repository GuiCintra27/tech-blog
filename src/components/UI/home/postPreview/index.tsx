"use client";

import styled from "styled-components";
import { BgImage } from "./backgroundImage";
import { DataCard } from "./dataCard";

export function PostPreview({
  postPreviewData,
}: {
  postPreviewData: {
    imageUrl: string;
    category: {
      color: string;
      name: string;
    };
    title: string;
    author: {
      name: string;
      avatarUrl: string;
    };
    date: string;
  };
}) {
  const { imageUrl, category, title, author, date } = postPreviewData;
  return (
    <Container>
      <BgImage url={imageUrl} />
      <DataCard category={category} author={author} title={title} date={date} />
    </Container>
  );
}

const Container = styled.div`
  margin: 2.4rem auto 14.4rem auto;
  position: relative;
`;
