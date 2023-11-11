import styled from "styled-components";

interface ButtonsRootProps {
  children: React.ReactNode;
}

export function ButtonsRoot({ children }: ButtonsRootProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3.2rem;
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;
`;
