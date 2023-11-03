import PostContent from "@/components/UI/post";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default async function Post({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const postData = {
    id: 3,
    coverImage:
      "https://img.freepik.com/premium-photo/pet-cat-modern-neon-light-ai-generate-ai-generate_250484-10835.jpg",
    category: {
      color: "#4B6BFB",
      name: "Technology",
    },
    author: {
      name: "Jhon",
      picture:
        "data:image/jpeg;base64,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",
    },
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "August 20, 2022",
    content: `
      <h3>Alef Aeronautics say their Model A flying car will have a driving range of around 320km and a flight range of over 160km. But it hasn’t quite gotten off the ground just yet.</h3>
      <p>
        Human innovation has brought us to space and given us marvels like the Internet and artificial intelligence (AI), but as of 2023, flying cars still remain largely the stuff of science fiction.
      </p>
      <p>
        That said, US start-up <a href="https://www.alefaero.com/">Alef Aeronautics</a> has been working on a prototype of its new Model A flying car. Alef Aeronautics is tentatively hoping for a different picture next year.
      </p>
      <p>
        The California-based company unveiled their Model A flying car prototype at the ongoing Detroit Auto Show while also confirming that the craft has been approved for test flights by the <a href="https://www.faa.gov/">American Federal Aviation Administration</a>. So far the firm has not flown the vehicle for the public nor has it released footage of the car in flight.
      </p>
      <p>
        The Model A has two propellers in the front and back of the car which will enable it to execute vertical takeoff and landing.
      </p>
      <p>
        According to Alef, the electric-powered vehicle should have a driving range of around 320 km and a flight range of over 160 km.
      </p>
      <div class="mention">
        <p>
          “The idea is you have the right side of the car and the left side of the car in the actual shape of the wing, the real shape of the wing which is going to push you up. So when you go up, all you have to do is turn 90 degrees,” Jim Dukhovny, the CEO of Alef Aeronautics, explained.
        </p>
      </div>
      <p>
        Depending on the outcome of flight tests, Alef hopes to have their product on the market in 2025, retailing for €280,000.
      </p>
      <img src="https://static.seekingalpha.com/uploads/2018/8/26/47444632-15353371925506494_origin.jpg" alt="Elon Musk" />
      <p>
        But the company, which counts Elon Musk's <a href="https://www.spacex.com/">SpaceX</a> among its financial backers, will have to clear a number of regulatory hurdles before its flying car takes off.
      </p>
      <p>
        First, it will require approval from the <a href="https://www.nhtsa.gov/"> National Highway Traffic Safety Administration</a>.
      </p>
      <div class="mention">
        <p>
          "Everything takes time. It's very complicated. We need to do enough test flights to make sure it's safe and good for the demo. Second of all, you want to make a good first impression. So for eight actually for seven years, we're being in stealth mode.” 
        </p>
        <p>
          - Dukhovny
        </p>
      </div>      
      <h3>
        Air taxis
      </h3>
      <img src="https://eu-images.contentstack.com/v3/assets/blt31d6b0704ba96e9d/blte06e11259f30d5ad/63abe833dd6ec0256ca96c57/flying-taxi.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale" alt="flying taxi" />
      <p>
        Alef’s Model A is just one of a number of air taxis and air car prototypes being developed around the world.
      </p>
      <p>
        German company, <a href="https://www.volocopter.com/en"> Volocopter </a>, is expected to fly passengers during the Paris Olympics next summer aboard their eVTOL taxis, pending receipt of all certifications and authorisations in early 2024. Still, experts caution that the era of electric flying cars zipping through our skies is a long way off.
      </p>
      <div class="mention">
        <p>
          We are facing challenges. I think the engineering challenges, we are ready to tackle them. We have regulatory challenges which are more difficult because that involves governments and industries. And in all these, negotiations across borders too.
        </p>
        <p>
        - Dr Carlos Cesnik 
        </p>
      </div>
      <p>
      Dr Carlos Cesnik, a professor of Aerospace Engineering at the University of Michigan, says that when it comes to flying cars, we are still in the era of “those magnificent men in their flying machines” at the turn of the last century.
      </p>
      <p>
      “Imagine the beginning of aviation as we know [it], and those very weird concepts we saw in the early 1900s,” he said.
      </p>
      <p>
      "I think we are around that time now in this. You're going to see these concepts evolve, redundancy on them, those multi-rotors, the cost of the operation needs to be way lower than the normal helicopter operations for these to really become feasible and really fulfil the vision that we have of bringing these different ways of urban mobility to large cities," he added.
      </p>
      <p>
      While government bodies are issuing approvals for flight-testing eVTOLs and other flying car prototypes, the lack of infrastructure and regulatory framework is hampering them from fully entering the mainstream.
      </p>
      <p>
      Air taxis will take even longer, according to Cesnik, because they will require a much higher level of safety and the costs at the moment are prohibitive.
      </p>
    `,
  };
  return (
    <>
      <Header />
      <main
        style={{ width: "fit-content", maxWidth: "80rem", margin: "0 auto" }}
      >
        <PostContent postData={postData} />
      </main>
      <Footer />
    </>
  );
}
