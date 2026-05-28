import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import type { FunctionComponent } from "react"

const OneGallery: FunctionComponent<{ children: React.ReactNode, delay?: number }> = ( { children, delay = 5000 } ) => {

    return (

        <Carousel plugins={[ Autoplay( { delay: delay } ) ]} opts={{ loop: true }} className="shadow-2xl rounded-xl">

            <CarouselContent>
                {children}
            </CarouselContent>

            <CarouselPrevious className="-left-3"/>
            <CarouselNext className="-right-3"/>

        </Carousel>

    )

}

export default OneGallery;