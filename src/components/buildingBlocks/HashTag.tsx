import type { FunctionComponent } from "react";

const HashTag: FunctionComponent<{ text: string }> = ( { text }) => {

    return <div className="text-xl italic font-semibold bg-gray-200 rounded-full px-3 leading-none py-1.5 pr-4" style={{ boxShadow: "0px 4px 4px #00000050"}}> # { text } </div>

}

export default HashTag;