import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Sebastian Castro</title>
        <meta name="description" content="I'm Sebastian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/roar.jpg" />
      </Head>
      <main>
        <div>
          <div>
            <Image src="/roar.jpg" alt="sebastian" width={200} height={200} />
          </div>
          <div>
            <h4>Hello Im</h4>
            <h1>Sebastian</h1>
          </div>
        </div>
        <div>
          <p>
            I am a developer and
            <a href="https://github.com/JohanSebastiaCG">
              lover of open source.
            </a>
            I like Rust, Go, TypeScript, and quick websites. I build some other
            open source libraries. Probably reading some web specification right
            now.
          </p>
          <p>
            Wanna talk about something? <span>Message me on email me at</span>
            johancs@gmail.com
          </p>
        </div>
      </main>
    </>
  );
}
