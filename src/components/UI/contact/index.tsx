"use client";

import Image from "next/image";

import { Container } from "./styles";

export function ContactCard() {
  const socialMediaLogos = [
    "logo-facebook.svg",
    "logo-twitter.svg",
    "logo-instagram.svg",
    "logo-youtube.svg",
  ];

  return (
    <Container>
      <main>
        <div className="author">
          <Image src="/author.svg" width={64} height={64} alt="Author" />
          <div className="info">
            <h3>Guilherme Cintra</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero id
            ullam necessitatibus soluta, velit incidunt temporibus. Libero,
            eligendi inventore sed minima pariatur dolor impedit voluptates
            dicta, voluptatem voluptatum, deserunt eius.
          </p>
        </article>
        <div className="social-media">
          {socialMediaLogos.map((path, index) => (
            <div
              className="card"
              key={index}
              onClick={() => alert("This link is for illustration only")}
            >
              <Image
                src={`/logo/${path}`}
                width={16}
                height={16}
                alt="Social Media"
              />
            </div>
          ))}
        </div>
      </main>
    </Container>
  );
}
