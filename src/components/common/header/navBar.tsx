import Link from "next/link";
import styled from "styled-components";

export function NavBar() {
  const pages = {
    Home: "/",
    Categories: "/categories",
    Contact: "/contact",
  };
  return (
    <>
      <PageLink>
        {Object.keys(pages).map((page, index) => (
          <div key={index}>
            {/* @ts-expect-error */}
            <Link href={pages[page]}>
              {page}
            </Link>
          </div>
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

  a:hover {
    color: #4b6bfb;
  }
`;
