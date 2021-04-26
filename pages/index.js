import Head from "next/head";
import Link from "next/link";
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1>
          <a href="https://nextjs.org">Devter</a>
          <nav>
            <Link href="/timeline">
              <a>Timeline</a>
            </Link>
          </nav>
        </h1>
      </AppLayout>
    </>
  );
}
