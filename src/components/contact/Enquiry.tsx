import HashSection from "../buildingBlocks/HashSection"
import EnquiryForm from "../buildingBlocks/EnquiryForm"

const Enquiry = () => {

    return (

        <HashSection id="enquiry" classes="flex-col w-full flex gap-6 items-center min-[1075px]:px-3 px-6 mt-12">

            <h2 className="text-6xl font-medium"> Let's get in touch! </h2>

            <EnquiryForm classes="grow w-full"/>

        </HashSection>

    )

}

export default Enquiry