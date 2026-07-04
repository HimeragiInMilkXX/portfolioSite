import { useEffect, useRef, type FunctionComponent } from "react";
import gsap from 'gsap'
import { asset } from "@/lib/assets";

const HeroImg: FunctionComponent<{ classes?: string, url?: string }> = ({ classes, url = "home.jpg" }) => {

    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {

        if( !imgRef.current ) return

        gsap.fromTo( imgRef.current, {

            translateY: "4rem",
            opacity: "0"

        }, {

            translateY: "0",
            opacity: "1",
            duration: 1,
            ease: "power1.out"

        }).eventCallback( 'onUpdate', () => window.scrollTo(0, 0))

    }, [])

    return ( <img src={asset(`/home/hero/${url}`)} alt="" className={`${classes} aspect-square object-cover relative`} ref={imgRef}/> )
    
}

export default HeroImg
