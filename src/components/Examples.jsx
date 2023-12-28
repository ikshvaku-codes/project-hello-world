import TabButton from "./TabButton/TabButton.jsx";
import { EXAMPLES } from "../assets/data.js";
import { TabContent } from "./TabContent/TabContent.jsx";
import { useState } from "react";
import Sections from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(){
    let [selectedTopic, setSelectedTopic] = useState("Click Krde Saale");
    let handleEvent = (selectedButton) => {
     
      setSelectedTopic(selectedButton);
     
    };


    return(



        // <section id = "examples">
        //     <h2>Examples</h2>
        //     <menu>
        //      <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleEvent('components')}>Components</TabButton>
        //      <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleEvent('jsx')}>JSX</TabButton>
        //      <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleEvent('props')}>Props</TabButton>
        //      <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleEvent('state')}>State</TabButton>
        //    </menu>
        //    {selectedTopic === "Click Krde Saale" ? <p id="tab-content">Please select a Topic.</p>:<TabContent {...EXAMPLES[selectedTopic]}/> }
        // </section>
        <Sections title = "Examples" id = "examples">
            <Tabs
                button={
                    <>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleEvent('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleEvent('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleEvent('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleEvent('state')}>State</TabButton>
                    </>
                }
            >
                {selectedTopic === "Click Krde Saale" ? <p id="tab-content">Please select a Topic.</p>:<TabContent {...EXAMPLES[selectedTopic]}/> }
            </Tabs>
          {/* <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleEvent('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleEvent('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleEvent('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleEvent('state')}>State</TabButton>
          </menu>
          {selectedTopic === "Click Krde Saale" ? <p id="tab-content">Please select a Topic.</p>:<TabContent {...EXAMPLES[selectedTopic]}/> } */}
        </Sections>
        
    );
}