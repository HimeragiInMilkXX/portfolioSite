import { pageAtom } from "@/states";
import { useAtom } from "jotai";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import { HashLink } from "react-router-hash-link"

const NavLink: FunctionComponent<{ to: string, setOpen?: Dispatch<SetStateAction<boolean>> }> = ( { to, setOpen = () => {} } ) => {

    const [ page, ] = useAtom(pageAtom);

    return ( <li className={ page === to ? 'underline first-letter:uppercase' : 'first-letter:uppercase' }><HashLink to={ to.length <= 0 ? '/#' : `/${to}#`} onClick={() => setOpen(false)} >{to.length <= 0 ? 'Home' : to}</HashLink></li> );

}

export default NavLink;