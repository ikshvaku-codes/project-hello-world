import { useState } from "react";
import {CORE_CONCEPTS} from "./assets/data.js"
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./assets/data.js";
import { TabContent } from "./components/TabContent/TabContent.jsx";


function App() {
  let [selectedTopic, setSelectedTopic] = useState("Click Krde Saale");
  let handleEvent = (selectedButton) => {
   
    setSelectedTopic(selectedButton);
   
  };
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}

            {CORE_CONCEPTS.map((coreConcept => <CoreConcept {...coreConcept} />))}

          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleEvent('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleEvent('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleEvent('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleEvent('state')}>State</TabButton>
          </menu>
          {selectedTopic === "Click Krde Saale" ? <p id="tab-content">Please select a Topic.</p>:<TabContent {...EXAMPLES[selectedTopic]}/> }
          
        </section>
      </main>
    </div>
  );
}

export default App;
