import type { FunctionComponent } from "react";

const NumberBall: FunctionComponent<{ classes?: string, number: number, wh: string, question: string }> = ( { classes="", number, wh } ) => {

    return (

        <h2 className={`${classes} text-5xl flex gap-3 items-center`}>
            <span className={`number text-xl flex justify-center items-center box-border aspect-square leading-0 h-[80%] bg-black/80 rounded-full text-white font-medium`}> {number} </span>
            <span className="wh">{wh.toUpperCase()}</span>
        </h2>

    )

}

export default NumberBall