import type { FunctionComponent } from "react";
import projects from "../../projects.json"
import { asset } from "@/lib/assets";

const HoverTextImage: FunctionComponent<{ url: string, project: string, imgClasses?: string, sectionClasses?: string }> = ( { url, project, imgClasses, sectionClasses } ) => {

    return (

        <>
        
            <img src={asset(`${url}/${project.toLowerCase()}.png`)} alt="" className={`object-cover w-full transition-all relative ${imgClasses} h-full`} />

            <section className={`absolute inset-0 justify-center left-1/8 flex flex-col gap-3 opacity-0 w-4/5 transition-all ${sectionClasses}`}>

                <h2 className="text-4xl font-bold"> {project.replace("_", " ")} </h2>
                <p className="leading-relaxed"> {projects[project as keyof typeof projects]} </p>

            </section>

        </>

    )

}

export default HoverTextImage;
