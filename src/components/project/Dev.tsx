import type { FunctionComponent } from "react"
import HashSection from "../buildingBlocks/HashSection"
import type { ProjectDetails_Dev } from "@/types"
import { icons } from "@/types"
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
import { asset } from "@/lib/assets"

const Dev: FunctionComponent<{ dev: ProjectDetails_Dev }> = ({ dev }) => {

    const width: number = useViewport();

    return (

        <HashSection id="dev." classes="lg:mt-18 w-full gap-3 min-[1133px]:gap-6 grid min-[1133px]:grid-cols-4 grid-cols-2 max-md:px-6 relative">

            <h2 className="max-lg:hidden absolute text-8xl font-extrabold text-gray-200 -top-[5.2rem] ml-9 md:ml-3 left-0"> DEVELOPMENT </h2>

            {

                Object.entries( dev ).map(([key, value]) => {

                    return (

                        <section key={key} className="bg-gray-50 border shadow-xl flex flex-col gap-6 p-9 items-center rounded-xl">

                            <h2 className="text-3xl font-medium first-letter:uppercase text-center"> {key} </h2>

                            <div className="gap-6 grid grid-cols-2 grid-flow-row w-full">
                                {
                                    value.map( ( value, index ) => {
                                        return (
                                            width >= 768 ?
                                                <HoverCard key={index}>
                                                    <HoverCardTrigger className="flex flex-col gap-3 items-center">
                                                        <img src={asset(`/icons/${value.toLowerCase()}.png`)} alt="" className="aspect-square object-contain basis-0 grow" />
                                                        <p className="text-center text-xs"> {value} </p>
                                                    </HoverCardTrigger>
                                                    <HoverCardContent>
                                                        {icons[value as keyof typeof icons]}
                                                    </HoverCardContent>
                                                </HoverCard> :
                                                <Popover key={index}>
                                                    <PopoverTrigger>
                                                        <img src={asset(`/icons/${value.toLowerCase()}.png`)} alt="" className="aspect-square object-contain basis-0 grow" />
                                                        <p className="text-center text-xs"> {value} </p>
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        {icons[value as keyof typeof icons]}
                                                    </PopoverContent>
                                                </Popover>
                                        )
                                    })
                                }
                            </div>

                        </section>

                    )

                })

            }

        </HashSection>

    )

}

export default Dev
