import type { FunctionComponent } from "react"
import HashSection from "../buildingBlocks/HashSection"
import type { ProjectDetails_Reflect } from "@/types"
import { Check, X } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useViewport from "@/utils/useViewport"

const Reflect: FunctionComponent<{ reflect: ProjectDetails_Reflect }> = ( { reflect: { fail, succeed, summary } } ) => {

    const width = useViewport();

    return (

        <HashSection id="reflect." classes="max-md:px-6 px-3 flex-col gap-4.5 w-full flex justify-center items-center">

            <h2 className="max-md:hidden text-8xl font-extrabold text-gray-200"> REFLECTION </h2>
            <h2 className="md:hidden text-7xl font-extrabold max-sm:text-4xl"> REFLECTION </h2>

            { width >= 900 ?
                <Table className="w-full m-auto">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center text-2xl px-6 py-3 lg:p-9 lg:py-4.5 font-bold border-2 border-gray-400/30!"> Success/Achievement </TableHead>
                            <TableHead className="text-center text-2xl px-6 py-3 lg:p-9 lg:py-4.5 font-bold border-2 border-gray-400/30!"> Failure/Adjustment </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { [...Array(succeed.length)].map( (_, i) => (

                            <TableRow key={i}>

                                <TableCell className="text-2xl font-light gap-1.5 px-6 py-3 lg:p-9 lg:py-4.5 border-2 border-gray-400/30! whitespace-pre-line">
                                    <div className="flex items-center">
                                        <Check className="lg:stroke-3 stroke-green-500 basis-0 grow"/><span className="leading-tight basis-0 grow-5">{succeed[i] ?? ""}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-2xl font-light gap-1.5 px-6 py-3 lg:p-9 lg:py-4.5 border-2 border-gray-400/30! whitespace-pre-line">
                                    <div className="flex items-center">
                                        <X className="lg:stroke-3 stroke-red-500 basis-0 grow"/><span className="leading-tight basis-0 grow-5">{fail[i] ?? ""}</span>
                                    </div>
                                </TableCell>

                            </TableRow>

                        ))}
                        <TableRow>
                            <TableCell className="text-center text-2xl px-6 py-3 lg:p-9 lg:py-4.5 font-bold border-2 border-gray-400/30!" colSpan={2}> Conclusion </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-xl px-6 py-3 lg:p-9 lg:py-4.5 border-2 border-gray-400/30! whitespace-pre-line text-justify [text-align-last:center]" colSpan={2}> {summary} </TableCell>
                        </TableRow>
                    </TableBody>
                </Table> :
                <Table className="w-full m-auto">
                    <TableBody>
                        <TableRow><TableCell className="text-center text-2xl px-6 py-3 lg:p-9 lg:py-4.5 font-bold border-2 border-gray-400/30!">Success/Achievement</TableCell></TableRow>
                        { succeed.map( ( value ) => { return (
                            <TableRow key={value}><TableCell className="text-2xl font-light gap-1.5 px-6 py-3 lg:p-9 lg:py-4.5 border-2 border-gray-400/30! whitespace-pre-line">
                                <div className="flex items-center">
                                    <Check className="lg:stroke-3 stroke-green-500 basis-0 grow"/><span className="leading-tight basis-0 grow-5">{value}</span>
                                </div>
                            </TableCell></TableRow>)} ) }

                        <TableRow><TableCell className="text-center text-2xl px-6 py-3 lg:p-9 lg:py-4.5 font-bold border-2 border-gray-400/30!">Failure/Adjustment</TableCell></TableRow>
                        { fail.map( ( value ) => { return (
                            <TableRow key={value}><TableCell className="text-2xl font-light gap-1.5 px-6 py-3 lg:p-9 lg:py-4.5 border-2 border-gray-400/30! whitespace-pre-line">
                                <div className="flex items-center">
                                    <X className="lg:stroke-3 stroke-red-500 basis-0 grow"/><span className="leading-tight basis-0 grow-5">{value}</span>
                                </div>
                            </TableCell></TableRow>)} ) }

                        <TableRow>
                            <TableCell className="text-center text-2xl px-6 py-3 lg:p-9 lg:py-4.5 font-bold border-2 border-gray-400/30!" colSpan={2}> Conclusion </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-xl px-6 py-3 lg:p-9 lg:py-4.5 border-2 border-gray-400/30! whitespace-pre-line text-justify [text-align-last:center]" colSpan={2}> {summary} </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            }

        </HashSection>

    )

}

export default Reflect