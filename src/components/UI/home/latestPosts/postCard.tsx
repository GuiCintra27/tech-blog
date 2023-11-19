import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { getDate } from "@/utils/date-util";
import { PostPreviewData } from "@/models/posts";
import { hexToRgbA } from "@/utils/color-util";
import { Category, PostData, Title } from "../postPreview/dataCard";

export function PostCard({ posts }: PostPreviewData) {
  const { coverImage, category, title, author, date } = posts;
  const backgroundColor = hexToRgbA(category ? category.color.hex : "929292", 0.05);

  return (
    <CardContainer>
      <Link href={`/posts/${posts.slug}`}>
        <Image src={coverImage.url} alt="Go to post" width={350} height={240} />
      </Link>
      <CategoryExtended
        color={category?.color.hex}
        $background_color={backgroundColor}
      >
        <p>{category?.name}</p>
      </CategoryExtended>
      <TitleExtended href={`/posts/${posts.slug}`}>{title}</TitleExtended>
      <PostDataExtended>
        <div className="author">
          <Image src={author?.picture ? author?.picture?.url : "/icons/undefined-user.png"} height={36} width={36} alt="" />
          <p className="light-bold">{author?.name}</p>
        </div>
        <p>{getDate(date)}</p>
      </PostDataExtended>
    </CardContainer>
  );
}

export const CardContainer = styled.div`
  width: 38.5rem;
  padding: 1.6rem;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  border-radius: 1.2rem;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.primary};

  img {
    border-radius: 0.6rem;
    background: lightgray 50% / cover no-repeat;
  }
`;

const CategoryExtended = styled(Category)<{ $background_color: string }>`
  background-color: ${({ $background_color }) => $background_color};
  p {
    color: ${({ color }) => color};
  }
`;

const TitleExtended = styled(Title).attrs({
  as: "a",
})`
  font-size: 2.4rem;
  line-height: 2.8rem;
  transition: all 0.4s;

  &:hover {
    color: #4b6bfb;
  }
`;

const PostDataExtended = styled(PostData)`
  img {
    height: 3.6rem;
    width: 3.6rem;
  }
`;
