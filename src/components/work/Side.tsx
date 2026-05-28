import HashSection from "../buildingBlocks/HashSection"
import projects from "../../projects.json"
import HoverTextImage from "../buildingBlocks/HoverTextImage"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

const Side = () => {

    return (

        <>

            <HashSection id="side" classes="max-[907px]:flex flex-col items-center justify-center w-full grid workMain max-sm:gap-3 gap-6 relative min-[907px]:mt-[5.2rem] px-4.5">

                <h2 className="max-[907px]:hidden flex-col absolute text-8xl font-extrabold text-gray-200 -top-21 pr-9 w-full text-end"> SIDE PROJ. </h2>
                <h2 className="max-[907px]:block hidden text-7xl font-extrabold max-sm:text-4xl"> SIDE PROJ. </h2>

                <Carousel
                    className="relative w-full"
                    opts={{
                        loop: true,
                        dragFree: true,
                        containScroll: false,
                        watchDrag: false
                    }}
                    plugins={[
                        AutoScroll({
                        speed: -1,  // Lower = slower. Try values between 0.5 - 2
                        stopOnInteraction: false,
                        })
                    ]}>

                    <CarouselContent>
                        { Object.keys(projects).map( ( key ) => {

                            return (

                                <CarouselItem key={key} className="rounded border p-0 mx-3 overflow-hidden basis-1/4 h-[50vw] md:h-[30vw] relative hover:[&>section]:opacity-100! highlightsBlock hover:[&>img]:scale-110 hover:[&>img]:blur-xs hover:[&>img]:opacity-30">
                                    <HoverTextImage url="/work/side" project={key} imgClasses="h-full" sectionClasses="[&>p]:hidden [&>h2]:text-xl! max-xl:left-3"/>
                                </CarouselItem>

                            )

                        })}
                    </CarouselContent>

                </Carousel>

            </HashSection>

        </>

    )

}

export default Side