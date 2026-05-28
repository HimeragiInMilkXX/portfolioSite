import { Icon } from "@iconify/react";
import type { FunctionComponent } from "react";

const ColorDesc: FunctionComponent<{ styles: { [style: string]: string }, color: { colors: string[]; monotone: boolean; reason: string; }, classes: string }> = ({ styles, color: { colors, monotone, reason }, classes="" } ) => {

    return (

        <div className={`${classes} flex flex-col gap-12`}>

            <section className="flex flex-col">

                <h3 className="text-5xl font-medium text-black/70 border-b pb-3 border-black/20 max-[470px]:text-3xl"> Adopted Styles </h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(206.8px,1fr))] grid-flow-row gap-3 pt-6">

                    {

                        Object.entries(styles).map( ( [ style, icon ] ) => {

                            return (

                                <section key={style} className="flex items-center gap-3 text-3xl"> <Icon icon={icon} className="text-4xl" /> {style} </section>

                            )

                        })

                    }

                </div>

            </section>

            <section className="flex flex-col">

                <h3 className="text-5xl font-medium text-black/70 max-[470px]:text-3xl"> Choice of Colors </h3>
                <div className="flex pt-3 gap-3">

                    {

                        colors.map( ( color, index ) => {

                            return (

                                <section className="flex flex-col gap-1.5 w-15" key={index}>

                                    <div className="aspect-square border-2" style={{ backgroundColor: color }}></div>
                                    <h6 className="text-center text-xs"> {color} </h6>

                                </section>

                            )

                        })

                    }

                    { monotone && <section className="flex flex-col gap-1.5 w-15">

                        <div className="aspect-square border-2 bg-[url(/project/colorWheel.png)] bg-cover bg-center bg-no-repeat"></div>
                        <h6 className="text-center text-xs"> All Colors </h6>

                    </section> }

                </div>

            </section>

            <section className="flex flex-col">
                <h3 className="text-5xl font-medium text-black/70 border-b pb-3 border-black/20 max-[470px]:text-3xl"> Expectations </h3>
                <p className="text-justify pt-3 text-xl leading-relaxed"> {reason} </p>
            </section>

        </div>

    )

}

export default ColorDesc