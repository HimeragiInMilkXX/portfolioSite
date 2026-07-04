import { useState, type FunctionComponent } from "react";
import gsap from "gsap";
import { asset } from "@/lib/assets";

const SkillsCircle: FunctionComponent<{ skillset: string, underlayerClasses?: string }> = ({ skillset, underlayerClasses }) => {

    const [ angle, setAngle ] = useState(360);
    const [ opacity, setOpacity ] = useState(1);

    const draw = ( hover: boolean ) => {

        const proxy = { value: hover ? 360 : 0 };

        gsap.to( proxy, {

            value: hover ? 0 : 360,
            duration: 0.75,
            ease: "power3.out",
            onUpdate: () => {
                setAngle( proxy.value );
                setOpacity( proxy.value / 360 );
            }

        })
        
    }

    return (

        <section className="aspect-square rounded-full min-w-85 relative"
            style={ { background: `

                conic-gradient(#FFFFFF 0deg ${angle}deg, transparent ${angle}deg 360deg)

            `} }>

                <div className={`${underlayerClasses} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square rounded-full absolute -z-1 bg-center bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${asset(`/about/skills/${skillset.toUpperCase()}.png`)})` }}></div>
                <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 aspect-square rounded-full shadow-2xl bg-white absolute bg-center bg-size-[50%] bg-no-repeat"
                        style={{ backgroundImage: `url(${asset(`/about/skills/${skillset.toUpperCase()}_icon.svg`)})`}}
                        onMouseEnter={() => draw( true )} onMouseLeave={() => draw( false )}></div>
                <h3 className="absolute w-full text-center top-3 text-2xl font-light" style={{ opacity: opacity }}> {skillset} </h3>

        </section>

    )

}

export default SkillsCircle;
