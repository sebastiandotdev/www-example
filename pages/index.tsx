import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian</title>
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
            <h4>Hello I'm</h4>
            <h1>Sebastian</h1>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
