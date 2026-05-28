import HashSection from "../buildingBlocks/HashSection"
import ServiceCard from "../buildingBlocks/ServiceCard"

const Capability = () => {

    return (

        <HashSection id="capability" classes="w-full flex-col flex gap-12 justify-center items-center px-3">

            <h2 className="text-6xl font-semibold text-center"> Available Services </h2>

            <div className="flex gap-12 justify-center flex-wrap">
                <ServiceCard name="UI/UX Design" content="Wireframes, page layout, component design, responsive design, design handoff"
                    photo="design.jpg" icon="clarity:design-solid"/>
                <ServiceCard name="Frontend" content="Implement performance optimal, accessible UI/UX design in HTML/CSS/JS/frameworks"
                    photo="frontend.webp" icon="tabler:code"/>
                <ServiceCard name="Backend" content="APIs, business logic, auth, databases, background jobs, security and server"
                    photo="backend.jpg" icon="bxs:server"/>
            </div>

        </HashSection>

    )

}

export default Capability