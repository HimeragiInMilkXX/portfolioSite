import HashSection from "../buildingBlocks/HashSection"
import HorizontalTimeline from "../buildingBlocks/HorizontalTimeline"

const Timeline = () => {

    return (

        <HashSection id="timeline" classes="flex-col w-full flex gap-9 justify-center items-center max-sm:px-0!">

            <h2 className="text-6xl font-semibold text-center"> Growth of Oscar </h2>

            <div className="overflow-hidden w-full relative ">
                
                <div className="h-1 w-full bg-gray-300 absolute top-1/2 -translate-y-1/2 z-1"></div>
                <HorizontalTimeline/>

            </div>

        </HashSection>

    )

}

export default Timeline