import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Teenager } from "./components/Teenager";
import { Whom } from "./components/Whom";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Work />
      <Whom />
      <Teenager />
    </div>
  );
}
