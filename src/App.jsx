import { Adventure } from "./components/Adventure/Adventure";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Adventure />
      </main>
    </>
  );
}

export default App;
