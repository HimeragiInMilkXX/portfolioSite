import type { FunctionComponent } from "react"
import HashSection from "../buildingBlocks/HashSection"
import type { ProjectDetails_Design } from "@/types"
import DraftCarousel from "../buildingBlocks/project/design/DraftCarousel"
import ColorDesc from "../buildingBlocks/project/design/ColorDesc"

const Design: FunctionComponent<{ design: ProjectDetails_Design }> = ({ design }) => {

    return (

        <HashSection id="design" classes="max-[1159px]:flex-col min-[554px]:mt-15 w-full flex gap-6 justify-center min-[1159px]:pr-6 max-md:px-6 relative">
            
            <h2 className="max-[554px]:hidden absolute text-8xl font-extrabold text-gray-200 -top-[5.2rem] ml-9 md:ml-3 left-0"> DESIGN </h2>
            <h2 className="max-[554px]:block hidden text-7xl font-extrabold max-sm:text-4xl text-center"> Design </h2>

            <ColorDesc styles={design.styles} classes="basis-0 grow-2 box-border p-9 shadow-xl border border-black/10 rounded-xl" color={design.color}/>
            <DraftCarousel drafts={design.drafts} classes="basis-0 grow-[1.5] p-3 shadow-xl border border-black/10 rounded-xl"/>

        </HashSection>

    )

}

export default Design