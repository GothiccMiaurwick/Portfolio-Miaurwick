import Navbar from "./components/Navbar/page";
import AboutMe from "./components/AboutMe/page";
import Work from "./components/Work/page";

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <AboutMe />
      <Work />
    </div>
  );
}
