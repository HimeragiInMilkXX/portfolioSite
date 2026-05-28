import { hashtags } from "@/types"
import BioGallery from "../buildingBlocks/BioGallery"
import HashSection from "../buildingBlocks/HashSection"
import HashTag from "../buildingBlocks/HashTag"

const Bio = () => {

    return (

        <HashSection id="bio" classes="max-sm:px-0! max-lg:flex-col w-full flex gap-12 justify-center items-center relative">

            <BioGallery/>
            
            <div className="max-md:justify-center max-md:px-6 flex flex-col gap-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full items-center pb-6">

                <h2 className="text-6xl font-bold text-center"> I'm Oscar from Hong Kong </h2>

                <div className="max-md:justify-center max-md:flex max-lg:hidden flex flex-wrap md:w-180 box-border md:px-4.5 gap-x-4.5 gap-y-3">

                    { hashtags.map( h => { return <HashTag text={h} key={h}/> } ) }

                </div>

            </div>

        </HashSection>

    )

}

export default Bio