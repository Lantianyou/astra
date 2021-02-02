import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="max-w-xl container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
