import styled from "styled-components";

export const PostHeader = styled.div<{ $category_background: string }>`
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  word-wrap: break-word;

  .category {
    display: flex;
    padding: 0.6rem 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    border-radius: 0.6rem;
    background: ${({ $category_background }) => $category_background};

    p {
      color: #fff;

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem; /* 142.857% */
    }
  }

  .title {
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 4rem; /* 111.111% */
  }

  .postData {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    p {
      color: ${({ theme }) => theme.colors.text.ads};

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem; /* 142.857% */
    }

    .author {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        clip-path: circle(50% at 50% 50%);
      }
    }
  }
`;
