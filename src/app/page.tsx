import { DemoForm } from "./components/DemoForm";
import { Direction } from "./components/Direction";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Methodology } from "./components/Methodology";
import { OurMetodology } from "./components/OurMetodology";
import { Partners } from "./components/Partners";
import { Tasks } from "./components/Tasks";
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
      <Direction />
      <Tasks />
      <Methodology />
      <OurMetodology />
      <Partners />
      <DemoForm />
    </div>
  );
}
