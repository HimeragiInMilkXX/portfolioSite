import { useEffect, useState, type FunctionComponent } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { asset } from "@/lib/assets";

export const DraftItem: FunctionComponent<{ value: string }> = ({ value }) => {

    const [ cover, setCover ] = useState<boolean>(true);

    return (
        <CarouselItem className="hover:[&>img]:opacity-100! h-full" onClick={() => setCover(!cover)}>
            <img src={asset(value)} alt="" className={`${cover ? 'object-cover' : 'object-contain' } max-h-168.5 w-full h-full opacity-70 transition-all`}/>
        </CarouselItem>
    )

}

const DraftCarousel: FunctionComponent<{ drafts: { [desc: string]: string }, classes?: string }> = ({ drafts, classes }) => {

    const [ api, setApi ] = useState<CarouselApi>()

    const desc: string[] = Object.keys(drafts);

    const [ current, setCurrent ] = useState<number>(0)

    useEffect( () => {

        if( !api ) return

        api?.on( "scroll", () => {

            setCurrent(api.selectedScrollSnap())

        } )

    }, [api])

    return (
        <div className={`${classes} flex flex-col items-center gap-3 relative`}>
            <Carousel setApi={setApi} opts={ { loop: true } } plugins={[Autoplay({ delay: 5000, stopOnInteraction: false } )]} className="[&>div]:h-full grow border-9 overflow-hidden rounded border-white shadow">
                <CarouselContent className="h-full">
                    {
                        Object.values( drafts ).map( ( value ) => {
                            return <DraftItem key={value} value={value}/>
                        })
                    }
                </CarouselContent>

            </Carousel>
            <p className="text-center text-black/50 text-xl"> {desc[current]} </p>
            <div className="absolute absoluteCenter w-full flex justify-between">

                <ChevronLeft className="relative scale-300 scale-y-350 left-1.5 stroke-gray-400 hover:stroke-gray-700 transition-all" onClick={() => api?.scrollPrev()}/>
                <ChevronRight className="relative scale-300 scale-y-350 right-1.5 stroke-gray-400 hover:stroke-gray-700 transition-all" onClick={() => api?.scrollNext()}/>

            </div>
        </div>
    )

}

export default DraftCarousel
