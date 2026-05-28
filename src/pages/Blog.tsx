import { getDefaultStore } from "jotai";
import { pageAtom } from "@/states";
import { useEffect } from "react";

function Blog() {
    useEffect(() => { getDefaultStore().set(pageAtom, "blog"); }, []);

    return (
        <>
            <section id="featured" className="h-[50vh] w-full bg-green-400"></section>
            <section id="latest" className="h-[50vh] w-full bg-green-300"></section>
        </>
    );
}
export default Blog;