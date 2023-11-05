import Image from "next/image";
import styled from "styled-components";

export function NewsLetter() {
  return (
    <Container>
      <p className="title">Newsletter</p>
      <p className="subtitle">Get blog articles and offers via email</p>
      <div className="mailBox">
        <input type="email" placeholder="Your Email" />
        <Image src={"/icons/mail-icon.svg"} width={20} height={20} alt="" />
      </div>

      <button onClick={() => alert("This button is for illustration only")}>
        Subscribe
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 39.2rem;
  padding: 3.2rem;

  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.primary};
  font-family: var(--work-sans);

  .title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem; /* 120% */
  }

  .subtitle {
    margin-bottom: 2.2rem;

    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */
    color: ${({ theme }) => theme.colors.text.ads};
  }

  .mailBox {
    padding: 1rem 1.6rem;

    display: flex;
    width: 100%;

    justify-content: center;
    align-items: center;
    gap: 2rem;

    border: ${({ theme }) => theme.borderWidth} solid
      ${({ theme }) => theme.colors.border};
    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */

    input {
      width: 100%;

      background-color: transparent;
      border: none;
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }

  button {
    padding: 1.2rem 2rem;

    display: flex;
    
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    align-self: stretch;

    border: none;
    border-radius: 0.6rem;
    background: #4b6bfb;

    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem; /* 150% */

    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
