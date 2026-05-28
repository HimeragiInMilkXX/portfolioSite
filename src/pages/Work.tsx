import { getDefaultStore } from "jotai";
import { pageAtom } from "@/states";
import { useEffect } from "react";
import Main from "@/components/work/Main";
import Lab from "@/components/work/Lab";
import Side from "@/components/work/Side";
import HeroImg from "@/components/buildingBlocks/HeroImg";

function Work() {

    useEffect( () => { 	getDefaultStore().set(pageAtom, "work"); }, [] )

    return (

        <>
        
			<HeroImg url="work.png"/>

            <Main/>
            <Side/>
            <Lab/>

        </>

    )

}

export default Work;