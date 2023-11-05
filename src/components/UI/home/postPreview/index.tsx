"use client";

import styled from "styled-components";
import { BgImage } from "./backgroundImage";
import { DataCard } from "./dataCard";
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
            <DataCard
              category={{
                color: item.category.color.hex,
                name: item.category.name,
              }}
              author={{
                name: item.author.name,
                picture: item.author.picture.url,
              }}
              title={item.title}
              date={item.date}
            />
          </div>
        ))
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 2.4rem auto 14.4rem auto;
  position: relative;
`;
