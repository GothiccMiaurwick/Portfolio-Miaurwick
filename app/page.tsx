import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import PortfolioCards from "./components/PortfolioCards/PortfolioCards";

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <AboutMe />
      <PortfolioCards />
    </div>
  );
}
