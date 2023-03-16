import { Header } from "../components/Header";
import { Photo } from "../components/Photo";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Network } from "../components/Network";
import { Like } from "../components/Like";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
        <div className="flex flex-col sm:flex-row gap-8">
          <Photo />
          <div className="flex flex-col justify-center">
            <About />
          </div>
        </div>
        <div className="mt-10 leading-7 text-gray-900 text-lg">
          <Like />
        </div>
        <div className="mt-10 leading-7 text-lg text-gray-900">
          <Contact />
        </div>
        <div className="mt-10 flex gap-4">
          <Network />
        </div>
      </main>
    </>
  );
}