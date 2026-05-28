import HashSection from "../buildingBlocks/HashSection"
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import comments from '../../comments.json'
import CommentsBlock from "../buildingBlocks/CommentsBlock"
import type { CommentItem } from "@/types"

const Comments = () => {

    const commentsTop: CommentItem[] = Object.values(comments).filter( ( _, index ) => index % 2 == 0);
    const commentsBottom: CommentItem[] = Object.values(comments).filter( ( _, index ) => index % 2 > 0);

    return (

        <HashSection id="comments" classes="max-lg:flex-col w-full flex gap-3 justify-center items-center flex-col">

            <Carousel
                className="relative w-full"
                opts={{
                    loop: true,
                    dragFree: true,
                    containScroll: false,
                    watchDrag: false
                }}
                plugins={[
                    AutoScroll({
                    speed: 1,  // Lower = slower. Try values between 0.5 - 2
                    stopOnInteraction: false,
                    })
                ]}
            >
                <CarouselContent>
                    { commentsTop.map( ( comments, index ) => { return <CarouselItem key={index} className="lg:basis-1/2">
                        <div className="p-1.5"> <CommentsBlock commentItem={comments}/> </div>
                    </CarouselItem> })}
                </CarouselContent>
            </Carousel>

            <Carousel
                className="relative w-full"
                opts={{
                    loop: true,
                    dragFree: true,
                    containScroll: false,
                    watchDrag: false
                }}
                plugins={[
                    AutoScroll({
                    speed: -1,  // Lower = slower. Try values between 0.5 - 2
                    stopOnInteraction: false,
                    })
                ]}
            >
                <CarouselContent>
                    { commentsBottom.map( ( comments, index ) => { return <CarouselItem key={index} className="lg:basis-1/2">
                        <div className="p-1.5"> <CommentsBlock commentItem={comments}/> </div>
                    </CarouselItem> })}
                </CarouselContent>
            </Carousel>

        </HashSection>

    )

}

export default Comments