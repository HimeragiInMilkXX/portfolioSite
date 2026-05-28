import { useEffect, useRef, type FunctionComponent } from "react";
import gsap from 'gsap'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const HeroGallery: FunctionComponent<{ classes?: string, displayName: string, desc: string, gallery: string[], project: string }> = ({ classes = "", displayName, desc, gallery, project }) => {

    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if( !galleryRef.current ) return

        gsap.fromTo( galleryRef.current, {

            translateY: "4rem",
            opacity: "0"

        }, {

            translateY: "0",
            opacity: "1",
            duration: 1,
            ease: "power1.out"

        }).eventCallback( 'onUpdate', () => window.scrollTo(0, 0))

    }, [])

    return (
    
        <Carousel
            plugins={ [ Autoplay({ delay: 5000 } ) ] }
            opts={ { loop: true, watchDrag: false, duration: 45 } }
            className={`${classes} w-full relative overflow-hidden"`}
            ref={galleryRef}
        >

            <section className="absolute absoluteCenter z-2 h-full w-[105%] bg-white/50 flex flex-col justify-center items-center gap-1.5">

                <h2 className="text-5xl sm:text-7xl font-bold text-black/80 w-2/3"> {displayName} </h2>
                <p className="max-lg:hidden text-xl leading-relaxed w-2/3 text-justify ml-1.5"> {desc} </p>

            </section>

            <CarouselContent className="aspect-square xl:aspect-3/2 m-0">
                {
                    gallery.map( ( fileName, index ) => {

                        return <CarouselItem key={index} className="m-0 p-0"><img src={`/project/${project}/${fileName}`} className="h-full object-cover w-full"/></CarouselItem>

                    })
                }
            </CarouselContent>
        </Carousel>
    )
    
}

export default HeroGallery