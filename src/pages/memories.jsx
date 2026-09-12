import { Carousel } from "../components/Carousel";

export default function Memories() {
  return (
    <>
      <main className="p-5 py-10">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-4xl oooh-baby mb-10">Our Memories</h1>
          <Carousel />
        </section>
      </main>
    </>
  );
}
