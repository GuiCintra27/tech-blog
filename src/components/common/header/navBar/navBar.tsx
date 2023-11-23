import Link from "next/link";
import { useCallback } from "react";
import { Container } from "./styles";

export function NavBar() {
  const pages = {
    Home: "/",
    Categories: "/categories",
    Contact: "/contact",
  };

  const alert = useCallback(() => {
    window.alert("This feature is not available");
  }, []);

  return (
    <Container>
      {Object.keys(pages).map((page, index) =>
        page === "Categories" ? (
          <p key={index} onClick={alert}>
            {page}
          </p>
        ) : (
          <div key={index}>
            {/* @ts-expect-error */}
            <Link href={pages[page]}>{page}</Link>
          </div>
        )
      )}
    </Container>
  );
}
