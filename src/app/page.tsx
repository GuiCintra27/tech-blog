import { PostPreview } from "@/components/UI/home/postPreview";
import { Ads } from "@/components/commomn/ads";
import { Header } from "@/components/commomn/header";

export default function Home() {
  const imageUrl = "https://img.freepik.com/fotos-premium/dois-gatinhos-fofos-em-coracoes-amorosos-romanticos-generative-ai_791316-12460.jpg";
  return (
    <main style={{ width: "fit-content", maxWidth: "120rem", margin: "0 auto" }}>
      <Header />
      <PostPreview imageUrl={imageUrl} />
      <Ads />
    </main>
  );
}
