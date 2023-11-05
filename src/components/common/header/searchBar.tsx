import styled from "styled-components";

export function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="Search" />
      <img src="/icons/search-icon.svg" alt="Search" />
    </Container>
  );
}

const Container = styled.div`
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

  img {
    width: 1.6rem;
    height: 1.6rem;

    cursor: pointer;
  }
`;
