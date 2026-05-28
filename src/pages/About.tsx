import { getDefaultStore } from "jotai";
import { pageAtom } from "@/states";
import { useEffect } from "react";
import Bio from "@/components/about/Bio";
import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";
import NextStep from "@/components/home/NextStep";
import HeroImg from "@/components/buildingBlocks/HeroImg";

function About() {
	useEffect(() => { getDefaultStore().set(pageAtom, "about"); }, []);

	return (

		<>

			<HeroImg url="about.jpg"/>

			<Bio/>
			<Skills/>
			<Timeline/>
            <NextStep/>
			
		</>

	);
}
export default About;