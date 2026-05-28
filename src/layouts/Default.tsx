import Footer from "@/components/nav/Footer";
import MainNav from "@/components/nav/MainNav";
import SubNav from "@/components/nav/SubNav";
import { Outlet } from "react-router-dom";

function Default() {

    return (

        <>
        
            <MainNav/>

            <div className="md:ml-54 xl:mr-30">
                <main className="md:gap-36 md:p-12 md:pt-9 pb-12 m-auto w-full box-border flex flex-col gap-21">
                    <Outlet/>
                </main>
            </div>

            <Footer/>

            <SubNav/>

        </>

    )

}

export default Default;