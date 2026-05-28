import { pageAtom } from "@/states";
import pageSections from "../../sidebar.json"
import { useAtom } from "jotai";
import { HashLink } from "react-router-hash-link"
import { useParams } from "react-router-dom";

function SubNav() {

    const [ page, ] = useAtom(pageAtom);
    const { project } = useParams();

    return (

        <aside className="xl:fixed xl:flex h-dvh hidden right-0 top-0 w-24 pt-15 pr-6 gap-12 flex-col">

            <img src="/mylogo.svg" alt="" className="md:scale-120 md:h-fit relative origin-left h-full opacity-0"/>

            <ul className="md:flex list-none font-light flex-col gap-3 hidden items-end">

                {pageSections[page as keyof typeof pageSections].map( ( item: string ) => {

                    return ( <li key={item} className="first-letter:uppercase"> <HashLink smooth to={`/${page}${project ? `/${project}` : ""}#${item}`}> {item} </HashLink> </li> )

                } )}

            </ul>

        </aside>

    )

}

export default SubNav;