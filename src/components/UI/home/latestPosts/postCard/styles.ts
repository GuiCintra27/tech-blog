import styled from "styled-components";

import { Category, PostData, Title } from "@/components/UI/home/postPreview/dataCard/styles";

const CardRoot = styled.div`
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

export const Card = {
  Root: CardRoot,
  Category: CategoryExtended,
  Title: TitleExtended,
  PostData: PostDataExtended
}