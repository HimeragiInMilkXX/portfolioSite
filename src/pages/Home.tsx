import { getDefaultStore } from "jotai";
import { pageAtom } from "@/states";
import { useEffect } from "react";
import Oscar from "@/components/home/Oscar";
import Roles from "@/components/home/Roles";
import Comments from "@/components/home/Comments";
import Highlights from "@/components/home/Highlights";
import NextStep from "@/components/home/NextStep";
import HeroImg from "@/components/buildingBlocks/HeroImg";

function Home() {

	useEffect( () => { 	getDefaultStore().set(pageAtom, ""); }, [] )

	return (

		<>
		
			<HeroImg url="home.jpg"/>

			<Oscar/>
			<Roles/>
			<Highlights/>
			<Comments/>
			<NextStep/>

		</>

	);
}

export default Home;
