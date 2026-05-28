import type { FunctionComponent } from "react";
import { Card, CardContent } from '@/components/ui/card'
import type { CommentItem } from "@/types";

type Props = {

    commentItem: CommentItem,

}

const CommentsBlock: FunctionComponent<Props> = ( { commentItem: { name, comment, url } } ) => {

    return (

        <Card className="shadow">

            <CardContent className="flex relative gap-6 items-center max-h-30">

                <img src={url} alt="" className="w-1/5 aspect-square rounded-full object-cover"/>

                <section className="flex flex-col gap-1.5 relative">

                    <h3 className="text-xl font-medium"> {name} </h3>
                    <p className="leading-snug line-clamp-3 text-ellipsis"> {comment} </p>
                </section>

                {/* <HoverCard>
                    <HoverCardTrigger className="absolute bottom-0 right-6 leading-none underline text-xs"> More </HoverCardTrigger>
                    <HoverCardContent className="w-fit max-w-80 flex flex-col gap-1.5">
                        <h3 className="text-xl font-medium"> {name} <span className="inline-block ml-3 font-normal opacity-70 text-xs"> aka. {aka} </span> </h3>
                        <p className="leading-snug line-clamp-3 text-ellipsis"> {comment} </p>
                    </HoverCardContent>
                </HoverCard> */}


            </CardContent>

        </Card>

    );

}

export default CommentsBlock