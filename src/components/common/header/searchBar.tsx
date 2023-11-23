import styled from "styled-components";

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

const Container = styled.form<{ $search_icon: string }>`
  padding: 0.8rem 0.8rem 0.8rem 1.6rem;

  height: 3.6rem;
  width: 16.6rem;

  display: flex;

  border-radius: 0.5rem;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.headerSearchBar};

  input {
    width: 11.5rem;

    border: none;

    background-color: transparent;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text.headerSearchBar};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.headerSearchBarPlaceholder};
    }
  }

  button{
    width: 1.6rem;
    height: 1.6rem;

    border: none;

    background: url(${({ $search_icon }) => $search_icon});
    cursor: pointer;
  }

  img {
    width: 1.6rem;
    height: 1.6rem;

    cursor: pointer;
  }
`;
