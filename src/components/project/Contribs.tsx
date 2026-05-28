import type { FunctionComponent } from "react"
import HashSection from "../buildingBlocks/HashSection"
import type { ProjectDetails_Contributor } from "@/types"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import useViewport from "@/utils/useViewport"
import { useParams } from "react-router-dom"

const ContribsBubble: FunctionComponent<{ name: string, data: ProjectDetails_Contributor }> = ( { name, data: { role, link } } ) => {

    const width = useViewport();
    const {project} = useParams();

    return (

        width >= 768 ?

        <HoverCard>
            <HoverCardTrigger><img src={`/project/${project}/contribs/${name}.jpg`} alt="" className="max-w-12 rounded-full aspect-square object-cover"/></HoverCardTrigger>
            <HoverCardContent className="flex items-center gap-1.5 w-fit">
                <a className="text-2xl text-blue-800" href={link} target="_blank"> {name} </a> - <p className="text-black/50 leading-none relative top-0.5"> as {role} </p>
            </HoverCardContent>
        </HoverCard>
        :
        <Popover>
            <PopoverTrigger><img src={`/project/${project}/contribs/${name}.jpg`} alt="" className="max-w-12 rounded-full aspect-square object-cover"/></PopoverTrigger>
            <PopoverContent className="flex items-center gap-1.5 w-fit">
                <a className="text-2xl text-blue-800" href={link} target="_blank"> {name} </a> - <p className="text-black/50 leading-none relative top-0.5"> as {role} </p>
            </PopoverContent>
        </Popover>

    )

}

const Contribs: FunctionComponent<{ contribs: { [ name: string ]: ProjectDetails_Contributor } }> = ( { contribs } ) => {

    return (

        <HashSection id="contribs." classes="flex w-full gap-6 items-end pr-6 justify-end">

            <h2 className="text-3xl"> Contributions </h2>

            <div className="grid grid-flow-col gap-4.5">

                { Object.entries( contribs ).map(( [ name, data ] ) => {

                    return <ContribsBubble key={name} data={data} name={name}/>

                }) }

            </div>

        </HashSection>

    )

}

export default Contribs