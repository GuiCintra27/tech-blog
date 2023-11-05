import styled from "styled-components";

export function Links() {
  const pages = [
    "Home",
    "About",
    "Contact",
    "Blog",
    "Terms of Use",
    "Privacy Policy",
  ];

  const categories = ["Lifestyle", "Travel", "Fashion", "Food", "Photography"];

  return (
    <Container>
      <div className="section">
        <div className="title">Quick Link</div>
        {pages.map((page, index) => (
          <p
            className="link"
            key={index}
            onClick={() => alert("This link is for illustration only")}
          >
            {page}
          </p>
        ))}
      </div>
      <div className="section">
        <div className="title">Category</div>
        {categories.map((category, index) => (
          <p
            className="link"
            key={index}
            onClick={() => alert("This link is for illustration only")}
          >
            {category}
          </p>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  gap: 8rem;
  word-wrap: break-word;

  .section {
    display: flex;
    
    flex-direction: column;
    gap: 0.8rem;

    .title {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.8rem; /* 155.556% */
    }

    .link {
      color: ${({ theme }) => theme.colors.text.link};
      font-size: 1.6rem;
      line-height: 2.4rem; /* 150% */
      cursor: pointer;
    }
  }
`;
