import { getDefaultStore } from "jotai";
import { pageAtom } from "@/states";
import { useEffect } from "react";
import Enquiry from "@/components/contact/Enquiry";
import SNS from "@/components/contact/SNS";

function Contact() {
    useEffect(() => { getDefaultStore().set(pageAtom, "contact"); }, []);

    return (
        <>
            <Enquiry/>
            <SNS/>
        </>
    );
}
export default Contact;