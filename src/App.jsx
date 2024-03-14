import { Adventure } from "./components/Adventure/Adventure";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Live } from "./components/Live/Live";
import { Memories } from "./components/Memories/Memories";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Adventure />
        <Memories />
        <Work />
        <Live />
      </main>
    </>
  );
}

export default App;
