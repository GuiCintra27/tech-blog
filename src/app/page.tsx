import { Ads } from "@/components/common/ads";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { LatestPosts } from "@/components/UI/home/latestPosts";
import { PostPreview } from "@/components/UI/home/postPreview";

export default function Home({searchParams}: {searchParams: {page: string; search: string}}) {
  const page = Number(searchParams.page || 1);
  const search = searchParams.search || "";

  return (
    <>
      <Header />
      <main
        style={{ width: "fit-content", maxWidth: "120rem", margin: "0 auto" }}
      >
        <PostPreview />
        <Ads />
        <LatestPosts searchParams={{ page, search }} />
        <Ads />
      </main>
      <Footer />
    </>
  );
}
