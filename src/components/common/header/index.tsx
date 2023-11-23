"use client";

import Image from "next/image";

import { Container } from "./styles";
import { NavBar } from "./navBar/navBar";
import { SearchBar } from "./searchBar/searchBar";
import { ChangeTheme } from "./changeTheme/changeTheme";

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
          <ChangeTheme />
        </div>
      </main>
    </Container>
  );
}
