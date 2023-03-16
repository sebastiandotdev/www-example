import { Header } from "../components/Header";
import { Photo } from "../components/Photo";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Network } from "../components/Network";

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
          <p>
            I am a developer and
            <a href="https://github.com/JohanSebastiaCG">
              lover of open source.
            </a>
            I like Rust, Go, TypeScript, and quick websites. I build some other
            open source libraries. Probably reading some web specification right
            now.
          </p>
        </div>
        <div>
          <Network />
        </div>
      </main>
    </>
  );
}
