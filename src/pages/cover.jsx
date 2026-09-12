import dika from "../assets/dika.png";

export default function Cover() {
  return (
    <>
      <main>
        <section className="bg-gray-50 h-screen flex flex-col justify-center items-center">
          <h1 className="oooh-baby text-4xl text-center">
            Happy Birthday Dika Prasetya
          </h1>
          <div className="relative">
            <p className="text-[300px] pacifico text-blue-900 leading-none -rotate-5">
              20
            </p>
            <img
              className="absolute left-25 right-25 top-15 h-50 -rotate-10"
              src={dika}
            />
          </div>
          <button
            href=""
            className="bg-blue-500 h-10 px-5 rounded-full text-sm font-semibold text-white mt-20"
          >
            OPEN
          </button>
        </section>
      </main>
    </>
  );
}
