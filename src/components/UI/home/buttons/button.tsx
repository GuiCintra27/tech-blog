import Link from "next/link";
import styled from "styled-components";

export function ButtonsButton({
  page,
  search,
  text,
}: {
  page: number;
  search: string;
  text: string;
}) {
  return (
    <Container>
      <Link href={page >= 1 ? `?page=${page}&search=${search}` : ""}>
        {text}
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  border-radius: 0.6rem;
  border: 1px solid rgba(105, 106, 117, 0.3);

  a {
    color: ${({ theme }) => theme.colors.text.ads};

    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem; /* 150% */
  }

  &:hover {
    filter: brightness(1.5);
    transition: 0.5s;
  }
`;
