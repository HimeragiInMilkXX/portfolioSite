import { useEffect, useRef, type FunctionComponent } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import gsap from "gsap";

const EventCard: FunctionComponent<{ url: string, pos?: string, classes?: string, year: string, caption: string, captionFirst?: boolean, color?: string }> = ( { url, pos = "5/10", classes, year, caption, captionFirst = true, color = "#FFFFFF" }) => {

    const captionRef = useRef<HTMLDivElement | null>(null);

    const tl = gsap.timeline( { paused: true } );

    useEffect( () => {

        if ( !captionRef.current ) return;

        tl.fromTo( captionRef.current, {

            translateX: captionFirst ? "0%" : "100%"
            
        }, { 

            translateX: captionFirst ? "100%" : "0%",
            duration: 0.75,
            ease: "power3.inOut"

        } );

    })

    const animate = ( hover: boolean ) => {

        if( !captionRef.current ) return;

        if( !hover ) { tl.reverse(); return }

        tl.play();

    }

    return (

        <Card className={`z-1 ${classes} min-w-50 gap-0 relative overflow-hidden p-0 border-none rounded-sm`} style={{ gridRow: pos }} onMouseEnter={() => animate(true)} onMouseLeave={() => animate(false)}>
            <img src={url} alt="" className={`absolute h-full w-full object-cover inset-0 -z-1 border-4 rounded-sm`} style={{ borderColor: color }}/>
            <div className="w-full h-full bg-white py-9 relative" ref={captionRef}>
                <CardHeader>
                    <CardTitle> {year} </CardTitle>
                </CardHeader>
                <CardContent className="whitespace-normal"> {caption} </CardContent>
            </div>
        </Card>

    )

}

export default EventCard;