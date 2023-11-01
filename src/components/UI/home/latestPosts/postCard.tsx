import { PostPreviewData } from "@/lib/types/posts";
import styled from "styled-components";
import { Category, PostData, Title } from "../postPreview/dataCard";
import Image from "next/image";
import { hexToRgbA } from "@/lib/functions/hexToRgba";

export function PostCard({ postPreviewData }: PostPreviewData) {
  const { imageUrl, category, title, author, date } = postPreviewData;
  const backgroundColor = hexToRgbA(category.color, 0.05);

  return (
    <Container>
      <Image src={imageUrl} alt="" width={360} height={240} />
      <CategoryExtended
        color={category.color}
        $background_color={backgroundColor}
      >
        <p>{category.name}</p>
      </CategoryExtended>
      <TitleExtended>{title}</TitleExtended>
      <PostDataExtended>
        <div className="author">
          <Image src={author.avatarUrl} height={36} width={36} alt="" />
          <p className="light-bold">{author.name}</p>
        </div>
        <p>{date}</p>
      </PostDataExtended>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 38.5rem;
  padding: 1.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;

  border-radius: 1.2rem;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.primary};

  img {
    width: auto;
    height: auto;
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

const TitleExtended = styled(Title)`
  font-size: 2.4rem;
  line-height: 2.8rem;
`;

const PostDataExtended = styled(PostData)`
  img {
    height: 3.6rem;
    width: 3.6rem;
  }
`;
