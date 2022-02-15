import FooterComponent from "../components/Footer/FooterComponent";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <FooterComponent />
    </div>
  );
}

export default MyApp;
