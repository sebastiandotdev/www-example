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
      <main>
        <div>
          <Photo />
          <About />
        </div>
        <div>
          <Contact />
          <Like />
        </div>
        <div>
          <Network />
        </div>
      </main>
    </>
  );
}
