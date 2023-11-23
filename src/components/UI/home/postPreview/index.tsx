"use client";

import styled from "styled-components";

import { DataCard } from "./dataCard/dataCard";
import { BgImage } from "./background/backgroundImage";
import { useLatestPostQuery } from "@/generated/graphql";
import { SkeletonLoading } from "@/components/common/loading";

export function PostPreview() {
  const { data, loading } = useLatestPostQuery({
    variables: {
      last: 1,
    },
  });

  return (
    <Container>
      {loading ? (
        <SkeletonLoading
          $width="121rem"
          $height="60rem"
          $border_radius="1.2rem"
        />
      ) : (
        data?.posts?.map((item) => (
          <div key={item.slug}>
            <BgImage url={item.coverImage.url} />
            <DataCard {...item} />
          </div>
        ))
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 2.4rem auto 14.4rem auto;
`;
