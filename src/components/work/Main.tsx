import HashSection from "../buildingBlocks/HashSection"
import projects from "../../projects.json"
import HoverTextImage from "../buildingBlocks/HoverTextImage"
import OneGallery from "../buildingBlocks/OneGallery"
import { CarouselItem } from "../ui/carousel"
import { Link } from "react-router-dom"

const Main = () => {

    return (

        <>

            <HashSection id="main" classes="max-[907px]:hidden w-full grid workMain grid-rows-2 gap-6 relative mt-[5.2rem] px-4.5">

                <h2 className="absolute text-8xl font-extrabold text-gray-200 -top-[5.2rem] ml-9"> MAIN PROJ. </h2>

                { Object.keys(projects).map( ( key, index ) => {

                    if( index >= 5 ) return;

                    return (

                        <Link to={`/project/${key.toLowerCase()}`} className="rounded overflow-hidden hover:[&>section]:opacity-100! highlightsBlock transition-all hover:[&>img]:scale-110 hover:[&>img]:blur-xs hover:[&>img]:opacity-30 relative shadow-2xl" key={key}>

                            <HoverTextImage url="/work/main" project={key} imgClasses="h-full" sectionClasses="[&>p]:hidden"/>

                        </Link>

                    )

                })}

            </HashSection>

            <HashSection id="main" classes="md:mt-0 md:mb-0 mt-6 mb-6 hidden w-full max-[907px]:flex flex-col gap-3 items-center justify-center my-3 relative px-6">

                <h2 className="text-7xl font-extrabold max-sm:text-4xl"> MAIN PROJ. </h2>

                <OneGallery>

                    { Object.keys( projects ).map( ( key, index ) => {

                        if( index >= 5 ) return;

                        return (

                            <CarouselItem key={key} className="rounded overflow-hidden">

                                <div className="rounded-xl h-65 p-0 overflow-hidden relative flex justify-center items-center transition-all hover:[&>img]:scale-110 hover:[&>img]:blur-xs hover:[&>section]:opacity-100 hover:[&>img]:opacity-30">
                                    <HoverTextImage url="/work/main" project={key}/>
                                </div>

                            </CarouselItem>

                        )

                    })}

                </OneGallery>

            </HashSection>

        </>

    )

}

export default Main