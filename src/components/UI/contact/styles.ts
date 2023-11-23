import styled from "styled-components";

export const Container = styled.div`
  width: 121.6rem;
  padding: 4.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.footer};

  main {
    display: flex;
    width: 66.8rem;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    .author {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        h3 {
          color: ${({ theme }) => theme.colors.text.primary};

          font-size: 2rem;
          font-weight: 500;
          line-height: 2.8rem; /* 140% */
        }

        p {
          color: ${({ theme }) => theme.colors.text.ads};

          font-size: 1.4rem;
          line-height: 2rem; /* 142.857% */
        }
      }

      img {
        border-radius: 8rem;
        filter: lightgray 50%;
      }
    }

    article {
      color: ${({ theme }) => theme.colors.text.post};
      text-align: center;

      font-size: 1.8rem;
      line-height: 2.6rem; /* 144.444% */
    }

    .social-media {
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;

      .card {
        padding: 0.8rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;

        border-radius: 0.6rem;
        background: ${({ theme }) => theme.colors.text.ads};
        cursor: pointer;
      }
    }
  }
`;
