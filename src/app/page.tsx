import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Work />
    </div>
  );
}
