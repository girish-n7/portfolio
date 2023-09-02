import Header from "./components/Header";
import Footer from "./components/Footer";
import SwitchPage from "./components/SwitchPage";

export default function App() {
  return (
    <div>
      <Header />
      {/* SwitchPage component to dynamically display the correct components based on requested routes */}
      <SwitchPage />
      <Footer />
    </div>
  );
}
