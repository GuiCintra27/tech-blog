"use client";

import { Container } from "./styles";

export function BgImage({url}: {url: string}) {
  return <Container data-testid="post-preview-background" $url={url} />;
}
