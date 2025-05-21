import "./index.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Container from "./components/container";
export default function App() {
  return (
    <div>
      <Navbar />
      <Container />
      <Main />
      <Footer />
    </div>
  );
}
