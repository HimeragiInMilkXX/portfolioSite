import type { FunctionComponent } from "react";

const ImgTextHori: FunctionComponent<{ url: string, title: string, content: string, classes?: string }> = ({ url, title, content, classes="" }) => {

    return (

        <section className={`${classes} flex gap-9 xl:nth-of-type-[even]:[&>div]:pl-12 xl:nth-of-type-[odd]:[&>div]:pr-12 nth-of-type-[even]:flex-row-reverse nth-of-type-[even]:[&>div]:text-end nth-of-type-[even]:[&>div_.content]:[text-align-last:end] items-center`}>

            <p className="basis-0 grow-[2.5]"><img src={url} alt="" className="h-full w-full object-cover border shadow"/></p>

            <div className="flex gap-3 basis-0 grow-3 flex-col">

                <h2 className="text-5xl font-medium whitespace-nowrap"> {title} </h2>
                <p className="content text-justify leading-relaxed text-xl"> {content} </p>

            </div>

        </section>

    )

}

export default ImgTextHori