"use client";

import { Container } from "./styles";

export function BgImage({url}: {url: string}) {
  return <Container $url={url} />;
}
