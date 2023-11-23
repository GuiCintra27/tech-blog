import styled from "styled-components";

export const SectionTitle = styled.p`
  margin-bottom: 3.2rem;

  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.8rem; /* 116.667% */
`;

export const Container = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 2rem;
`;