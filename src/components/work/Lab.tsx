import HashSection from "../buildingBlocks/HashSection"

const Lab = () => {

    return (

        <HashSection id="lab" classes="w-full flex gap-12 justify-center items-center px-6 relative">

            <img src="/work/lab/lab.png" alt="" className="max-md:w-10/12 w-5/12 object-cover aspect-square max-lg:absolute max-lg:w-full overflow-visible max-lg:opacity-10"/>

            <section className="flex flex-col flex-3">

                <div className="flex flex-col gap-6">

                    <div className="flex gap-6 max-[907px]:justify-center">
                        <h2 className="max-[907px]:hidden font-extrabold text-8xl text-gray-200 relative top-9.5 ml-4.5"> LAB </h2>
                        <h2 className="max-[907px]:block hidden text-7xl font-extrabold max-sm:text-4xl"> LAB </h2>
                        <p className="font-medium text-3xl self-end pb-1.5 max-[1377px]:hidden"> never let curiosity stop </p>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-[repeat(2,12vw)] gap-6 max-lg:grid-rows-[repeat(2,30vw)]">

                        <img src="/work/lab/1.gif" alt="" className="object-cover w-full h-full" />
                        <img src="/work/lab/1.gif" alt="" className="object-cover w-full h-full" />

                    </div>

                </div>

            </section>

        </HashSection>

    )

}

export default Lab