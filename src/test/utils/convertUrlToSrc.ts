export function convertUrlToSrc(url: string) {
  let src = url.replaceAll("/", "%2F").replaceAll(":", "%3A");
  
  return `/_next/image?url=${src}&w=750&q=75`;
}