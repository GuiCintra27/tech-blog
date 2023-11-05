import { LatestPosts } from "@/components/UI/home/latestPosts";
import { PostPreview } from "@/components/UI/home/postPreview";
import { Ads } from "@/components/common/ads";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default function Home() {
  return (
    <>
      <Header />
      <main
        style={{ width: "fit-content", maxWidth: "120rem", margin: "0 auto" }}
      >
        <PostPreview />
        <Ads />
        <LatestPosts />
        <Ads />
      </main>
      <Footer />
    </>
  );
}
