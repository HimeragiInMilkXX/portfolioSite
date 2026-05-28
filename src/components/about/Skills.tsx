import HashSection from "../buildingBlocks/HashSection"
import SkillsCircle from "../buildingBlocks/SkillsCircle"

const Skills = () => {

    return (

        <HashSection id="skills" classes="flex-col w-full flex gap-12 justify-center items-center">

            <h2 className="text-6xl font-semibold text-center"> All-rounded Skillset </h2>

            <div className="flex gap-x-9 gap-y-3 flex-wrap justify-center">
                <SkillsCircle skillset="Frontend" underlayerClasses="bg-gray-50"/>
                <SkillsCircle skillset="Backend" underlayerClasses="bg-gray-50"/>
                <SkillsCircle skillset="Others" underlayerClasses="bg-gray-50 [&+div]:bg-size-[80%] [&+div]:bg-position-[55%_60%]"/>
            </div>

        </HashSection>

    )

}

export default Skills