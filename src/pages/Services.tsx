import { getDefaultStore } from "jotai";
import { pageAtom } from "@/states";
import { useEffect } from "react";
import Case from "@/components/services/Case";
import Capability from "@/components/services/Capability";
import Workflow from "@/components/services/Workflow";
import NextStep from "@/components/home/NextStep";
import HeroImg from "@/components/buildingBlocks/HeroImg";


function Services() {
    useEffect(() => { getDefaultStore().set(pageAtom, "services"); }, []);

    return (
        <>

			<HeroImg/>

            <Capability/>
            <Workflow/>
            <Case/>
            <NextStep/>
            
        </>
    );
}
export default Services;