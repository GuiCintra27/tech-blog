"use client";

import styled from "styled-components";
import { BgImage } from "./backgroundImage";
import { DataCard } from "./dataCard";
import { useLatestPostQuery } from "@/generated/graphql";

export function PostPreview() {
  const { data } = useLatestPostQuery({
    variables: {
      last: 1,
    },
  });
  
  return (
    <Container>
      {data?.posts?.map((item) => (
        <>
          <BgImage url={item.coverImage.url} />
          <DataCard
            category={{color: item.category.color.hex, name: item.category.name}}
            author={{name: item.author.name, picture: item.author.picture.url}}
            title={item.title}
            date={item.date}
          />
        </>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 2.4rem auto 14.4rem auto;
  position: relative;
`;
