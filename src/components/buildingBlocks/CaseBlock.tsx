import type { FunctionComponent } from "react"
import HoverTextImage from "./HoverTextImage"

const HighlightsBlock: FunctionComponent<{ classes?: string, setShowInstruction: ( value: React.SetStateAction<boolean> ) => void, name: string }> = ( { classes, setShowInstruction, name } ) => {

    return (

        // <section className={`${classes} highlightsBlock grow hover:grow-2 transition-all bg-no-repeat bg-cover bg-center h-80 hover:h-90`} style={{ backgroundImage: `url(${url})` }}></section>

        <div onMouseEnter={ () => setShowInstruction(false) } onMouseLeave={ () => setShowInstruction(true) } className={`${classes} hover:[&>section]:opacity-100! highlightsBlock w-1/3 transition-all hover:[&>img]:aspect-square hover:w-5/6 hover:[&>img]:shadow-2xl hover:[&>img]:blur-xs hover:[&>img]:opacity-30 relative shadow-2xl`}>

            <HoverTextImage url="/services/case" project={name} imgClasses="min-h-70 h-full" sectionClasses="left-1/6! w-3/5!"/>

        </div>

    )

}

export default HighlightsBlock