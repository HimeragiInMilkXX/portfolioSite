import { useRef, useState, type FunctionComponent, type ReactNode } from "react";
import gsap from "gsap"

const FlipCard: FunctionComponent<{ classes?: string, front: ReactNode, back: ReactNode }> = ({ classes = "", front, back,}) => {

    const cardRef = useRef<HTMLDivElement>(null);

    const [flipped, setFlipped] = useState<boolean>(false);

    const handleFlip = () => {

        const next = !flipped;
        setFlipped(next)
        gsap.to(cardRef.current, {
        rotateY: next ? 180 : 0,
        duration: 0.5,
        ease: "power2.inOut",
        });
    }

    return (

        <button type="button" onClick={handleFlip} className={`group perspective-distant ${classes}`}>

            <div ref={cardRef} className={`w-full h-full relative transform-3d rounded-xl bg-white shadow-xl border transition-shadow duration-300`}>

                <div className="absolute inset-0 flex items-center justify-center backface-hidden rounded-xl overflow-hidden"> {front} </div>
                <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180 rounded-xl overflow-hidden"> {back} </div>

            </div>

        </button>

    )

}

export default FlipCard