import styled from "styled-components";

export function Contact() {
  return (
    <Container>
      <div id="title">About</div>
      <p className="text">
        ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div className="data">
        <p className="strong">Email:</p>
        <p>info@jstemplate.net</p>
      </div>
      <div className="data">
        <p className="strong">Phone:</p>
        <p>(123) 456-7890</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 28.9rem;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-all;
  word-wrap: break-word;

  #title {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem; /* 155.556% */
  }

  .text {
    margin: 1.2rem 0 2.4rem 0;

    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */
    color: ${({ theme }) => theme.colors.text.ads};
  }

  .data {
    /* text-base/Regular */
    display: flex;
    gap: 0.5rem;
    font-size: 1.6rem;
    font-style: normal;
    line-height: 2.4rem;

    .strong {
      font-weight: 600;
    }
  }
`;
