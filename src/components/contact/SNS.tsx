import HashSection from "../buildingBlocks/HashSection"
import { Icon } from "@iconify/react"

const SNS = () => {

    return (

        <HashSection id="sns" classes="max-[450px]:hidden w-full flex flex-col gap-6 items-center justify-center px-6">

            <h2 className="text-6xl font-semibold text-center opacity-80"> Follow me on Social Media! </h2>

            <div className="gap-3 flex flex-col">

                <div className="flex gap-6 items-center p-4.5 px-12 bg-gray-200 rounded-full">

                    <Icon icon="mdi:instagram" className="text-6xl"/>
                    <div className="flex gap-6 max-[1089px]:flex-col max-[1089px]:gap-1.5">
                        <a href="https://www.instagram.com/kiperformra2425/" target="_blank" className="text-3xl underline text-blue-900"> @kiperformra2425<span className="max-[780px]:hidden">(Personal)</span> </a>
                        <a href="https://www.instagram.com/thefreaktake/" target="_blank" className="text-3xl underline text-blue-900"> @thefreaktake<span className="max-[780px]:hidden">(Artist)</span> </a>
                    </div>
                </div>

                <div className="flex gap-6 items-center p-4.5 px-12 bg-gray-100 rounded-full">

                    <Icon icon="pajamas:twitter" className="text-6xl"/>
                    <a href="https://x.com/kiperformra2425" target="_blank" className="text-3xl underline text-blue-900"> @kiperformra2425<span className="max-[780px]:hidden">(Personal)</span> </a>
                </div>

            </div>

        </HashSection>

    )

}

export default SNS