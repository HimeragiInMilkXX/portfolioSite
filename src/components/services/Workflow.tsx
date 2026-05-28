import HashSection from "../buildingBlocks/HashSection"
import WorkflowBlock from "../buildingBlocks/WorkflowBlock"
import workflow from "../../workflow.json"

const Workflow = () => {

    return (

        <HashSection id="workflow" classes="max-[1071px]:flex-col gap-12 w-full flex justify-center items-center px-6 select-none">

            <div className="flex-col flex gap-6 basis-0">
                <h2 className="text-6xl font-semibold min-[1071px]:text-left text-center leading-tight"> Engineering Workflow </h2>
                <p className="text-xl leading-relaxed min-[1071px]:text-left text-center "> <span className="underline">Hover on the icons to see each step!</span> Every steps are predictable, sustainable and transparent, efficient only for the sake of the client </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 max-w-182">
                {
                    Object.values(workflow).map((workflowItem, index) => (
                        <WorkflowBlock key={index} color={workflowItem.color} icon={workflowItem.icon} order={(index+1).toString()} name={workflowItem.name} description={workflowItem.description} /> ))
                }
            </div>

        </HashSection>

    )

}

export default Workflow