import Head from "next/head";
import ArticleSection from "../components/ArticleSection/ArticleSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easybank | Next Generation Digital Banking</title>
        <meta
          name="description"
          content="Easybank landing page challenge from frontendmentor.io"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <Header />
      <main>
        <InfoSection />
        <ArticleSection />
      </main>
      <Footer />
    </>
  );
}
