import type { FunctionComponent } from "react"
import HashSection from "../buildingBlocks/HashSection"
import GanttChart from "../buildingBlocks/project/GanttChart"
import type { Chart_Task } from "@/types"

const Flow: FunctionComponent<{ flow: Chart_Task[] }> = ( { flow } ) => {

    return (

        <HashSection id="flow" classes="md:mt-15 relative max-md:px-6">

            <h2 className="max-md:hidden absolute text-8xl font-extrabold text-gray-200 -top-[5.2rem] ml-9 md:ml-3 left-0"> FLOW </h2>
            <h2 className="md:hidden text-7xl font-extrabold max-sm:text-4xl text-center mb-4.5"> FLOW </h2>

            <GanttChart flow={flow}/>

        </HashSection>

    )

}

export default Flow