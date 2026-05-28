import { Icon } from "@iconify/react";
import { useState, type FunctionComponent } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const WorkflowBlock: FunctionComponent<{ color: string, order: string, name: string, description: string, icon: string }> = ({ color, order, name, description, icon}) => {

    const [ open, setOpen ] = useState(false);

    return (

        <>
            <HoverCard openDelay={100} closeDelay={0}>
                <HoverCardTrigger className="max-sm:hidden relative box-border p-6 rounded-full aspect-square basis-0 hover:[&>.icon]:opacity-0 hover:[&>.order]:opacity-100" style={{ backgroundColor: color }}>
                    <div className="icon transition-all"><Icon icon={icon} className="text-8xl" /></div>
                    <div className="order absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl transition-all opacity-0">{order}</div>
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-1.5 w-auto max-w-125" style={{ backgroundColor: "#ffffffdf" }}>
                    <h3 className="text-2xl font-medium whitespace-nowrap"> {name} </h3>
                    <p> {description} </p>
                </HoverCardContent>
            </HoverCard>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger className="sm:hidden relative box-border p-6 rounded-full aspect-square basis-0" style={{ backgroundColor: color }}>
                    <div className={`transition-all ${open && 'opacity-0'}`}><Icon icon={icon} className="text-8xl" /></div>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl transition-all opacity-0 ${open && 'opacity-100!'}`}>{order}</div>
                </PopoverTrigger>
                <PopoverContent className="sm:hidden flex flex-col gap-1.5 min-[576px]:w-auto min-[576px]:max-w-125" style={{ backgroundColor: "#ffffffdf" }}>
                    <h3 className="text-2xl font-medium min-[576px]:whitespace-nowrap"> {name} </h3>
                    <p> {description} </p>
                </PopoverContent>
            </Popover>

        </>

    )

}

export default WorkflowBlock