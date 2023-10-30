import Link from "next/link";
import styled from "styled-components";

export function NavBar() {
  const pages = {
    Home: "/",
    Blog: "/blog",
    Contact: "/contact",
  };
  return (
    <>
      <PageLink>
        {Object.keys(pages).map((page, index) => (
          <Link key={index} href={pages[page]}>
            {page}
          </Link>
        ))}
      </PageLink>
    </>
  );
}

const PageLink = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.text.link};
`;
