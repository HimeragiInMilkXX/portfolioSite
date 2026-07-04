import { Link } from "react-router-dom";
import { Menu, ExternalLink } from "lucide-react";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
// import { pageAtom } from "@/states";
// import { useAtom } from "jotai";
import NavLink from "./NavLink";
import { HashLink } from "react-router-hash-link"
import Download from "@/pages/Download";
import { useState } from "react";
import { asset } from "@/lib/assets";

function MainNav() {

    // const [ page, ] = useAtom(pageAtom);

    const [ open, setOpen ] = useState(false);

    return (

        <nav className="max-md:justify-between md:items-start md:h-dvh md:w-50 md:fixed md:flex-col md:p-12 md:pt-15 items-center relative h-20 px-6 py-4.5 w-full left-0 top-0 box-border flex gap-12">

            <HashLink to="/#" className="md:h-fit h-full"><img src={asset("/mylogo.svg")} alt="" className="md:scale-120 md:h-fit relative origin-left h-full"/></HashLink>

            <ul className="uppercase md:flex list-none text-2xl font-light flex-col gap-6 hidden items-start">

                <NavLink to=""/>
                <NavLink to="about"/>
                <NavLink to="work"/>
                <NavLink to="services"/>
                <a href="https://d1ulrv6ofvvsmv.cloudfront.net/" target="_blank" className="flex items-center gap-1.5"> BLOG<ExternalLink/> </a>
                <NavLink to="contact"/>
                <Download/>


            </ul>

            <ul className="md:hidden list-none text-2xl font-light flex items-center gap-6">

                <li className="hidden sm:block"><Link to="/">Home</Link></li>
                <li className="hidden sm:block"><Link to="/work">Work</Link></li>
                <li className="hidden sm:block"><Link to="/about">About</Link></li>
                <li className="mr-12 hidden sm:block"><Link to="/contact">Contact</Link></li>

                <Drawer direction="right" open={open} onOpenChange={ (o) => setOpen(o) }>
                    <DrawerTrigger asChild><Menu className="sm:block fixed right-6 -translate-y-[0.8px] z-200" size={26}/></DrawerTrigger>
                    <DrawerContent className="m-0! p-12 rounded-none! flex flex-col gap-12 items-end z-200">

                        <DrawerHeader className="p-0 w-fit">

                            <DrawerTitle>
                                <HashLink to="/#"><img src={asset("/mylogo.svg")} alt="" className="relative h-24"/></HashLink>
                            </DrawerTitle>

                            <DrawerDescription className="hidden"></DrawerDescription>

                        </DrawerHeader>

                        <ul className="flex list-none text-3xl font-light flex-col gap-6 text-right">

                            <NavLink to="" setOpen={setOpen}/>
                            <NavLink to="work" setOpen={setOpen}/>
                            <NavLink to="about" setOpen={setOpen}/>
                            <a href="https://d1ulrv6ofvvsmv.cloudfront.net/" target="_blank" className="flex items-center gap-1.5 justify-end"> Blog<ExternalLink/> </a>
                            <NavLink to="services" setOpen={setOpen}/>
                            <NavLink to="contact" setOpen={setOpen}/>

                        </ul>

                    </DrawerContent>
                </Drawer>

            </ul>

        </nav>

    )

}

export default MainNav;
