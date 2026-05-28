import HashSection from "../buildingBlocks/HashSection"

const Oscar = () => {

    return (

        <HashSection id="oscar" classes="max-lg:flex-col w-full flex gap-12 justify-center items-center">

            <p className="lg:block hidden "><img src="/home/work.png" alt="oscar's working" className="object-contain max-h-125.5" style={{ filter: 'drop-shadow(0px 2px 0.1rem #000000)'}}/></p>

            <section className="lg:min-w-150 flex flex-col gap-6 pb-3">

                <h2 className="text-6xl max-[885px]:hidden"> Imagination into Form </h2>
                <p className="sm:whitespace-nowrap leading-loose text-xl sm:ml-3">
                    I'm Oscar. I'm an engineer.<br /><span className="inline=block ml-3">With your creativity and my skill, everything is possible</span>
                </p>

                <blockquote className="border-l-2 pl-6 italic self-start sm:ml-9">
                    <p>&quot;People don’t care about what you say, they care about what you build.&quot;</p>
                    <p className="text-right"><cite>— Mark Zuckerberg</cite></p>
                </blockquote>

            </section>

        </HashSection>

    )

}

export default Oscar