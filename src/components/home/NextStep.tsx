import HashSection from "../buildingBlocks/HashSection"
import EnquiryForm from "../buildingBlocks/EnquiryForm"
import { asset } from "@/lib/assets"

const NextStep = () => {

    return (

        <HashSection id="nextstep" classes="max-[1075px]:flex-col w-full flex min-[1075px]:gap-12 gap-6 items-center min-[1075px]:px-3 px-6">

            <div className="flex flex-col gap-3 min-[1075px]:w-5/12 box-border min-[1075px]:pl-3 px-3 pt-6">

                <h2 className="text-4xl"> I am always ready! </h2>
                <p className="leading-relaxed text-justify"> Are there any ideas in your mind? May I be the one who contributes to bring it into life? Feel free to check out other pages, or fill in the enquiry form aside to ask me anything. I look forward to our first contact. </p>

                <a href={asset("/download/CV2026.pdf")} className="text-blue-800 underline min-[1075px]:mt-6" download="Ang Chun Ho_CV_2026"> Download my CV </a>

            </div>

            <EnquiryForm classes="grow max-[1075px]:w-full"/>

        </HashSection>

    )

}

export default NextStep
