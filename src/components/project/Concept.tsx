import type { FunctionComponent } from "react"
import FlipCard from "../buildingBlocks/project/FlipCard"
import HashSection from "../buildingBlocks/HashSection"
import NumberBall from "../buildingBlocks/NumberBall"
import { asset } from "@/lib/assets"

const ConceptBlock: FunctionComponent<{ number: number, wh: string, content: string, question: string, classes?: string }> = ({ number, wh, question, content, classes = "" }) => {

    return (

        <section className="basis-0 grow flex flex-col gap-3 justify-center">

            <NumberBall number={number} wh={wh} question={question} classes={`${classes} max-[1548px]:text-4xl`}/>

            <p className="text-justify min-[1548px]:text-xl leading-relaxed line-clamp-8"> {content} </p>

        </section>

    )

}

const Concept: FunctionComponent<{ concept: { why: string, what: string, how: string, when: string } }> = ( { concept: { why, what, how, when } } ) => {

    return (

        <HashSection id="concept" classes="min-[554px]:mt-15 relative max-md:px-6 max-lg:flex-col w-full flex gap-12 justify-center min-[1049px]:min-h-[351px] min-[504px]:min-h-105 min-[378px]:min-h-125 min-h-150">

            <h2 className="max-[554px]:hidden absolute text-8xl font-extrabold text-gray-200 -top-[5.2rem] mr-12 md:mr-3 right-0"> CONCEPT </h2>

            <p className="min-[1049px]:block hidden basis-1/4 self-center"><img src={asset("/project/concept.png")} alt="oscar's working" className="object-contain" style={{ filter: 'drop-shadow(0px 2px 0.1rem #000000)'}}/></p>

            <div className="grow-4 basis-0 flex gap-9">
                <FlipCard classes="grow basis-0 h-full"
                    front={
                        <div className="w-full h-full py-12 px-12 flex bg-white max-[921px]:flex-col max-[921px]:py-6!
                            min-[921px]:[&>section:nth-of-type(1)]:border-r-2 min-[921px]:[&>section:nth-of-type(1)]:border-black/10 min-[921px]:[&>section:nth-of-type(1)]:pr-7.5 min-[921px]:[&>section:nth-of-type(2)]:pl-7.5">

                            <ConceptBlock number={1} wh="why" question="this website" classes="[&>.number]:bg-green-500 [&>.wh]:text-green-500" content={why}/>
                            <ConceptBlock number={2} wh="what" question="to achieve" classes="[&>.number]:bg-blue-500 [&>.wh]:text-blue-500" content={what}/>

                        </div>
                    }
                    back={
                        <div className="w-full h-full py-12 px-12 flex bg-white max-[921px]:flex-col max-[921px]:py-6!
                            min-[921px]:[&>section:nth-of-type(1)]:border-r-2 min-[921px]:[&>section:nth-of-type(1)]:border-black/10 min-[921px]:[&>section:nth-of-type(1)]:pr-7.5 min-[921px]:[&>section:nth-of-type(2)]:pl-7.5">

                            <ConceptBlock number={3} wh="how" question="to achieve" classes="[&>.number]:bg-pink-500 [&>.wh]:text-pink-500" content={how}/>
                            <ConceptBlock number={4} wh="when" question="to publish" classes="[&>.number]:bg-yellow-500 [&>.wh]:text-yellow-500" content={when}/>

                        </div>
                    }/>
            </div>

        </HashSection>

    )

}

export default Concept
