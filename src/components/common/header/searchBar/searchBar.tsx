import { Container } from "./styles";

export function SearchBar({ search }: { search: string }) {
  return (
    <Container $search_icon={"/icons/search-icon.svg"} action={"/"} method="get">
      <input
        type="search"
        placeholder="Search"
        name="search"
        defaultValue={search}
      />
      <button type="submit" />
    </Container>
  );
}
