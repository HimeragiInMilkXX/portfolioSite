import { useState } from "react";
import HashSection from "../buildingBlocks/HashSection"
import HighlightsBlock from "../buildingBlocks/HighlightsBlock"

import {
    CarouselItem,
} from "@/components/ui/carousel"
import projects from "../../projects.json"
import HoverTextImage from "../buildingBlocks/HoverTextImage";
import OneGallery from "../buildingBlocks/OneGallery";

const Highlights = () => {

    const [ showInstruction, setShowInstruction ] = useState(true);

    return (

        <>
            <HashSection id="highlights" classes="max-[907px]:hidden w-full flex flex-col gap-6 h-90 items-center justify-center my-3 relative px-6">
                <h2 className={`text-3xl font-medium absolute -top-5 ${showInstruction ? 'opacity-100' : 'opacity-0'} transition-all text-center`}> Hold on the banners to check recent projects! </h2>
                <div className="flex h-full items-center justify-center">
                    <HighlightsBlock classes="hover:ml-3" setShowInstruction={setShowInstruction} name="Dansharin"/>
                    <HighlightsBlock setShowInstruction={setShowInstruction} name="Catonese"/>
                    <HighlightsBlock classes="hover:mr-3" setShowInstruction={setShowInstruction} name="Foregin_Campus"/>
                </div>
            </HashSection>

            <HashSection id="highlights" classes="md:mt-0 md:mb-0 mt-12 mb-6 hidden w-full max-[907px]:flex flex-col gap-6 items-center justify-center my-3 relative px-6">

                <h2 className={`max-[478px]:hidden text-2xl font-medium absolute -top-10 transition-all text-center`}> Hold on the banners to check recent projects! </h2>

                <OneGallery>

                    { Object.keys( projects ).map( ( key, index ) => {

                        if( index > 2 ) return;

                        return (

                            <CarouselItem key={key}>

                                <div className="rounded-xl h-65 p-0 overflow-hidden relative flex justify-center items-center transition-all hover:[&>img]:scale-110 hover:[&>img]:blur-xs hover:[&>section]:opacity-100 hover:[&>img]:opacity-30">
                                    <HoverTextImage url="/home/highlights" project={key}/>
                                </div>

                            </CarouselItem>

                        )

                    })}

                </OneGallery>

            </HashSection>
        </>

    )

}

export default Highlights