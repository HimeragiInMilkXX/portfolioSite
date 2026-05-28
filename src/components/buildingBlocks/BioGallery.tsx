import type { FunctionComponent } from "react";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

const BioGallery: FunctionComponent<{ classes?: string }> = ( { classes } ) => {

    return (

        <Carousel
            className={`relative w-full ${classes}`}
            opts={{
                loop: true,
                dragFree: true,
                containScroll: false,
                watchDrag: false,
                align: "start"
            }}
            plugins={[
                AutoScroll({
                speed: 2,  // Lower = slower. Try values between 0.5 - 2
                stopOnInteraction: false,
                })
            ]}
        >
            <CarouselContent className="items-center [&_img]:opacity-40 relative">

                <CarouselItem className="md:basis-1/3">
                    <div className="pl-[2.25vw] pr-[3.75vw] relative -rotate-10"> <img src="/about/bio/1.jpg" alt="" className="w-full object-cover" /> </div>
                </CarouselItem>

                <CarouselItem className="md:basis-6/12">
                    <div className="px-[3vw] relative rotate-12"> <img src="/about/bio/2.jpg" alt="" className="w-full aspect-video object-cover" /> </div>
                </CarouselItem>

                <CarouselItem className="md:basis-4/12">
                    <div className="px-[3.75vw] relative rotate-8"> <img src="/about/bio/3.jpg" alt="" className="w-full object-cover" /> </div>
                </CarouselItem>

                <CarouselItem className="md:basis-5/12">
                    <div className="px-[4.5vw] relative -rotate-12"> <img src="/about/bio/4.jpg" alt="" className="w-full object-cover" /> </div>
                </CarouselItem>

                <CarouselItem className="md:basis-5/12">
                    <div className="px-[6vw] rotate-12"> <img src="/about/bio/5.jpg" alt="" className="w-full object-cover" /> </div>
                </CarouselItem>

            </CarouselContent>
        </Carousel>

    )

}

export default BioGallery