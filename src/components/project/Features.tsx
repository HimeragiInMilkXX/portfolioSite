import { useRef, type FunctionComponent } from "react"
import HashSection from "../buildingBlocks/HashSection"
import type { ProjectDetails_Features } from "@/types"
import ImgTextHori from "../buildingBlocks/ImgTextHori"
import { useParams } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Features: FunctionComponent<{ features: { [ title: string ]: ProjectDetails_Features } }> = ( {features} ) => {

    const { project } = useParams();

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP( () => {

        const revealElements = gsap.utils.toArray<HTMLDivElement>(".featureItem");

        revealElements.forEach( (el) => {

            gsap.from( el, {

                scrollTrigger: {

                    trigger: el,
                    start: "5% bottom", // starts the animatin when the top(~5% here tho) of the trigger element hits the bottom of the viewport
                    toggleActions: "play none none reverse",

                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",

            })

        })

    }, { scope: containerRef } );

    return (

        <>
            <HashSection id="features" classes="max-lg:hidden mt-9 relative px-6">
                <div className="flex-col w-full flex gap-12 justify-center items-center" ref={containerRef}>
                    {
                        Object.entries( features ).map( ([ title, { photo, description } ]) => {
                            return <ImgTextHori key={photo} url={`/project/${project}/features/${photo}`} title={title} content={description} classes="featureItem"/>
                        } )
                    }
                </div>
            </HashSection>

            <HashSection id="features" classes="lg:hidden relative flex-wrap w-full flex gap-x-6 gap-y-12 justify-center items-center max-md:px-6">
                {
                    Object.entries( features ).map( ([ title, { photo } ]) => {
                        return <section className="basis-0 min-w-[320px] grow flex-col gap-3 flex" key={photo}>

                            <img src={`/project/${project}/features/${photo}`} alt="" />
                            <h3 className="text-3xl font-medium whitespace-nowrap text-center"> {title} </h3>

                        </section>
                    } )
                }
            </HashSection>
        </>

    )

}

export default Features