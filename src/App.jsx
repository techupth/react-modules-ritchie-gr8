import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MainContent, ProductSection, FAQ } from "./components/Content";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
