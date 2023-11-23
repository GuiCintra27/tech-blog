import styled from "styled-components";

const CardRoot = styled.div`
  position: absolute;
  left: 6.4rem;
  bottom: -6.4rem;

  padding: 4rem;
  width: 59rem;

  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  border-radius: 1.2rem;
  border: ${({ theme }) => theme.borderWidth} solid
    ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.primary};

  /* shadow-md */
  box-shadow: 0px 12px 24px -6px ${({ theme }) => (theme.colors.primary === "#fff" ? "rgba(24, 26, 42, 0.12)" : "rgba(230, 231, 235, 0.12)")};
`;

export const Category = styled.div<{ color: string }>`
  padding: 0.4rem 1rem;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  
  border-radius: 0.6rem;
  background: ${({ color }) => color};

  p {
    color: #fff;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem; /* 142.857% */
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};

  font-size: 3.6rem;
  font-weight: 600;
  line-height: 4rem; /* 111.111% */
`;

export const PostData = styled.div`
  height: 3.6rem;

  display: flex;

  align-items: center;
  gap: 2rem;

  img {
    height: 3.6rem;
    width: 3.6rem;

    clip-path: circle(50% at 50%);
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .light-bold {
    font-weight: 500;
  }

  .author {
    display: flex;
    
    align-items: center;
    gap: 1.2rem;
  }
`;

export const Card = {
  Root: CardRoot,
  Category,
  Title,
  PostData,
}