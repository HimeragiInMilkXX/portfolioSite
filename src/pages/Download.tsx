import type { FunctionComponent } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { asset } from "@/lib/assets";


const Download: FunctionComponent<{ classes?: string }> = ({ classes = "" }) => {

    return (

        <Dialog>
            <DialogTrigger className={`${classes}`}>DOWNLOAD</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Download</DialogTitle>
                    <DialogDescription>
                        Here you can download my documents for reference, thank you for viewing and checking out
                    </DialogDescription>
                </DialogHeader>
                <a href={asset("/download/CV2026.pdf")} className="text-blue-800 underline" download="Ang Chun Ho_CV_2026"> Download my CV </a>
            </DialogContent>
        </Dialog>

    )

}

export default Download;
