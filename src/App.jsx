import Header from "./components/Header";
import Footer from "./components/Footer";
import SwitchPage from "./components/SwitchPage";

export default function App() {
  return (
    <div>
      <Header />
      {/* SwitcgPage component to dynamiccaly display the correct components based on requested routes */}
      <SwitchPage />
      <Footer />
    </div>
  );
}
