import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { ContactCard } from "@/components/UI/contact";

export default function Contact() {
  return (
    <>
      <Header search={""} />
      <main
        style={{ width: "fit-content", maxWidth: "120rem", margin: "0 auto" }}
      >
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}
