import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import {CORE_CONCEPTS} from "../assets/data.js"
import Sections from "./Section.jsx";

export default function CoreConcepts(){
    return(

        <Sections title = "Core Concepts" id = "core-concepts">
            <ul>
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
            {CORE_CONCEPTS.map((coreConcept => <CoreConcept {...coreConcept} />))}
            </ul>
        </Sections>
    );
}