import Navigation from "./Components/Navigation";
import Proudcts from "./Components/Products";
import Welcome from "./Components/Welcome";
import Working from "./Components/Working";
import Services from "./Components/Services";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-theme-orange-opacity via-transparent  ">
        <Navigation />
        <Welcome />
        <Working />
        <Proudcts />
        <Services />
        <Reviews />
        <Contact />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default App;
