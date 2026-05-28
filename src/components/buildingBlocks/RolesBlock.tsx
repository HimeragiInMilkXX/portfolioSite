import type { FunctionComponent } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import DraftCarousel from "./project/design/DraftCarousel";

const RolesBlock: FunctionComponent<{ children: React.ReactNode, works: { [desc: string]: string }, url: string, role: string, classes: string }> = ( { children, works, url, role, classes } ) => {

    return (

        <Dialog>
            <DialogTrigger className={`rolesBlock relative grow max-lg:min-w-55 max-lg:max-w-90 ${classes} transition-all hover:cursor-pointer`}>
                <img src={url} alt="" className="blur-[2px] pointer-events-none"/>
                <h2 className="absolute left-0 right-0 bottom-4.5 flex justify-center items-center text-4xl h-full gap-1.5 pointer-events-none transition-all"> <span className="max-lg:ml-6 font-light text-xl inline-block pb-3 whitespace-nowrap">I'm a</span> <br/>{role} </h2>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[60vw]">
                <DialogHeader>
                    <DialogTitle className="text-3xl">As a {role}...</DialogTitle>
                </DialogHeader>
                <div className="max-h-[50vh] flex max-md:flex-col gap-6 max-w-none max-md:overflow-y-scroll no-scrollbar">

                    <p className="basis-0 grow-[1.1] md:border-r text-xl leading-relaxed text-justify md:pr-6 md:overflow-y-scroll no-scrollbar">{children}</p>

                    <DraftCarousel classes="basis-0 grow" drafts={works}/>

                </div>
            </DialogContent>
        </Dialog>

    )

}

export default RolesBlock;