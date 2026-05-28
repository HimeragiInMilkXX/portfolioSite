import type { FunctionComponent } from "react";
const HashSection: FunctionComponent<{ children: React.ReactNode, id?: string | undefined, classes?: string | undefined }> = ({ children, id, classes }) => {

    return <section id={id} className={`max-sm:px-6 ${classes} scroll-mt-24`}>{children}</section>

}

export default HashSection;