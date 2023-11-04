import PostContent from "@/components/UI/post";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Header />
      <main
        style={{ width: "fit-content", maxWidth: "80rem", margin: "0 auto" }}
      >
        <PostContent slug={"Flying car"} />
      </main>
      <Footer />
    </>
  );
}
