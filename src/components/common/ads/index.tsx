"use client";
import styled from "styled-components";

export function Ads() {
  return (
    <Container>
      <div className="subtitle">Advertisement</div>
      <div className="mainTitle">You can place ads</div>
      <div className="dimensions">750x100</div>
    </Container>
  );
}

const Container = styled.div`
  margin: 8rem auto;
  display: flex;
  width: 75rem;
  height: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.ads};
  color: ${({ theme }) => theme.colors.text.ads};

  .subtitle {
    font-size: 1.4rem;
    line-height: 2rem; /* 142.857% */
  }

  .mainTitle {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem; /* 120% */
  }

  .dimensions {
    font-size: 1.8rem;
    line-height: 2.6rem; /* 144.444% */
  }
`;
