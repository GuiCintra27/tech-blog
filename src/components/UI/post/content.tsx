import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 80rem;
  flex-direction: column;

  img {
    margin-bottom: 3.2rem;
    width: 100%;
    border-radius: 1.2rem;
  }

  p {
    margin-bottom: 3.2rem;
    color: ${({ theme }) => theme.colors.text.post};

    /* Article/lg/Regular */
    font-family: var(--source-serif);
    font-size: 2rem;
    line-height: 3.2rem; /* 160% */
  }

  p + p {
    margin-top: 2rem;
  }

  h3 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.8rem; /* 116.667% */
  }

  .mention {
    margin-bottom: 3.2rem;
    display: flex;
    padding: 3.2rem;
    align-items: center;

    border-radius: 1.2rem;
    border-left: 4px solid ${({ theme }) => theme.colors.mention.border};
    background: ${({ theme }) => theme.colors.mention.background};

    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 2.4rem;
      font-style: italic;
      line-height: 3.2rem; /* 133.333% */
    }
  }
`;
