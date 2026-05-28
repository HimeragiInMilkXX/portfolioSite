import { getDefaultStore } from "jotai";
import { pageAtom } from "@/states";
import { useEffect, useMemo } from "react";
import HeroGallery from "@/components/project/HeroGallery";
import { useParams } from "react-router-dom";
import projectDetails from "../projectDetails.json"
import type { ProjectDetails } from "@/types";
import Concept from "@/components/project/Concept";
import Design from "@/components/project/Design";
import Features from "@/components/project/Features";
import Dev from "@/components/project/Dev";
import Reflect from "@/components/project/Reflect";
import Contribs from "@/components/project/Contribs";
import Flow from "@/components/project/Flow";

function Project() {

	useEffect(() => { getDefaultStore().set(pageAtom, "project"); }, []);

    const { project } = useParams()


    const details = useMemo<ProjectDetails | undefined>( () => {

        if( !project ) return undefined

        return projectDetails[project?.toLowerCase() as keyof typeof projectDetails]

    }, [ project ])

	return (

		<>

			<HeroGallery
                desc={details!.desc}
                displayName={details!.displayName}
                gallery={details!.gallery}
                project={project!}/>

			<Concept concept={details!.concept}/>
			<Design design={details!.design}/>
			<Features features={details!.features}/>
            <Dev dev={details!.dev}/>
            <Flow flow={details!.flow}/>
            <Reflect reflect={details!.reflect}/>
            <Contribs contribs={details!.contribs}/>
			
		</>

	);
}
export default Project;