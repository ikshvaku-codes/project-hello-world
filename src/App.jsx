import { useState } from "react";
import {CORE_CONCEPTS} from "./assets/data.js"
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";




function App() {
  const [selectedTopic, setSelectedTopic] = useState("Click Krde Saale");
  let handleEvent = (selectedButton) => {
    setSelectedTopic( selectedButton+" Kar diya Click.");
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={()=>handleEvent('components')}>Components</TabButton>
            <TabButton onClick={()=>handleEvent('jsx')}>JSX</TabButton>
            <TabButton onClick={()=>handleEvent('props')}>Props</TabButton>
            <TabButton onClick={()=>handleEvent('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
