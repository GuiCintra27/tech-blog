"use client";

import Image from "next/image";
import styled from "styled-components";

import { NavBar } from "./navBar";
import { SearchBar } from "./searchBar";
import { ChangeThemeButton } from "./changeThemeButton";

export function Header({ search }: { search: string }) {
  return (
    <Container>
      <main>
        <Image
          priority
          id="logo"
          src="/logo/logo.svg"
          width={158}
          height={36}
          alt="Logo"
        />
        <NavBar />
        <div className="actions">
          <SearchBar search={search} />
          <ChangeThemeButton />
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;

  main {
    width: 120rem;
    margin: 3.2rem auto;

    display: flex;
    justify-content: space-between;

    #logo {
      filter: brightness(${({ theme }) => theme.brightness})
        invert(${({ theme }) => theme.invert}) grayscale(1);
    }

    .actions {
      display: flex;
      align-items: center;

      gap: 4rem;
    }
  }
`;
