import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import BrowseRangeSection from "./components/BrowseRangeSection"
import OurProductsSection from "./components/OurProductsSection"

function App() {
    return (
        <div className="font-poppins text-black">
            <Navbar />
            <HeroSection />
            <BrowseRangeSection />
            <OurProductsSection />
        </div>
    )
}


export default App