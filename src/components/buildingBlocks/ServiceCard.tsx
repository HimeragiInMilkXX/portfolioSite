import { Icon } from "@iconify/react";
import { type FunctionComponent } from "react";
import { asset } from "@/lib/assets";

const ServiceCard: FunctionComponent<{ icon: string, name: string, content: string, photo: string, classes?: string }> = ( { icon, name, content, photo, classes } ) => {

    return (

        <section className={`grow flex flex-col items-center p-0 overflow-hidden gap-6 rounded-xl pb-9 relative shadow-2xl ${classes} basis-0 min-w-75 min-xs:min-w-92 min-[1103px]:max-w-92 max-w-2/3`}>

            <img src={asset(`/services/capability/${photo}`)} alt="" className="h-58.5 object-cover w-full"/>
            <Icon icon={icon} className="absolute top-1/2 max-[1103px]:-translate-y-1/2 min-[1103px]:top-45 left-1/2 -translate-x-1/2 bg-white shadow-2xl text-8xl box-border p-4.5 rounded-full overflow-visible"/>

            <div className="flex flex-col gap-3 mt-3 p-6 items-center">
                <h2 className="text-4xl text-center">{name}</h2>
                <p className="text-center">{content}</p>
            </div>

        </section>

    )

}

export default ServiceCard
