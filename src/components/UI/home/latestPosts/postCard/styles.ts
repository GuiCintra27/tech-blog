import styled from "styled-components";

import {
  PostData,
  Title,
} from "@/components/UI/home/postPreview/dataCard/styles";

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

const Category = styled.div<{ $background_color: string }>`
  padding: 0.4rem 1rem;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 0.6rem;
  background: ${({ $background_color }) => $background_color};

  p {
    color: ${({ theme }) => theme.colors.text.primary};

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem; /* 142.857% */
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
  Category,
  Title: TitleExtended,
  PostData: PostDataExtended,
};
