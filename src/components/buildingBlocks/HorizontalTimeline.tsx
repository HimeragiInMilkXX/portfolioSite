import { useEffect, useRef } from "react";
import EventCard from "./EventCard";
import { Icon } from "@iconify/react";

const HorizontalTimeline = () => {

	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {

		const el = containerRef.current;
		if (!el) return;

		const handler = (e: WheelEvent) => {
		e.preventDefault();

		el.scrollTo({
			left: el.scrollLeft + e.deltaY * 2.5,
			behavior: "smooth",
		});
		};

		el.addEventListener("wheel", handler, { passive: false });

		return () => el.removeEventListener("wheel", handler);
		
	}, []);

	return (
		<section className="bg-gray-50 md:rounded-xl place-items-center grid-flow-col min-h-100 grid grid-rows-13 gap-x-6 overflow-y-hidden overflow-x-scroll no-scrollbar whitespace-nowrap relative box-border px-12 md:shadow-inner"
			ref={containerRef} >

			<>
				<EventCard
				url="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
				classes="mr-9 h-full w-80"
				year="1998"
				caption="First day of kindergarten and feeling very brave"
				captionFirst={false}
				color="var(--color-blue-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
				pos="2/7"
				classes="mr-15 w-60"
				year="2002"
				caption="Learning to ride a bike without training wheels"
				color="var(--color-red-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1502086223501-7ea24ec836e5?auto=format&fit=crop&w=800&q=80"
				pos="9/13"
				classes="ml-21 w-60 mr-3"
				year="2005"
				caption="The summer I decided I was going to be an astronaut"
				color="var(--color-yellow-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&w=800&q=80"
				classes="h-full w-100 ml-9 mr-6"
				year="2008"
				caption="Finally won the regional science fair with my volcano"
				captionFirst={false}
				color="var(--color-emerald-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1496317556649-f930d733eea3?auto=format&fit=crop&w=800&q=80"
				pos="4/11"
				classes="h-full w-100 ml-6"
				year="2011"
				caption="Started my first band in the garage—we were loud"
				captionFirst={false}
				color="var(--color-purple-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1523050337447-ad7387227c72?auto=format&fit=crop&w=800&q=80"
				pos="9/13"
				classes="ml-21 w-60 mr-3"
				year="2014"
				caption="High school graduation! On to bigger things"
				color="var(--color-orange-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
				pos="2/7"
				classes="mr-15 w-75 right-30"
				year="2016"
				caption="Backpacking through Europe with just a map"
				color="var(--color-cyan-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
				pos="9/13"
				classes="ml-21 w-60 mr-3"
				year="2017"
				caption="Late night study sessions at the campus cafe"
				color="var(--color-pink-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80"
				pos="2/7"
				classes="w-75 relative right-21"
				year="2018"
				caption="Moved into my very first apartment in the city"
				color="var(--color-indigo-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
				pos="3/12"
				classes="h-full w-60"
				year="2019"
				caption="Started my first job as a junior developer"
				captionFirst={false}
				color="var(--color-lime-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
				pos="9/13"
				classes="ml-9 w-60 mr-18"
				year="2021"
				caption="Reached the summit of Mt. Rainier at sunrise"
				color="var(--color-amber-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
				pos="5/10"
				classes="h-full w-80"
				year="2022"
				caption="Speaking at my first tech conference"
				captionFirst={false}
				color="var(--color-violet-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?auto=format&fit=crop&w=800&q=80"
				pos="9/13"
				classes="ml-9 w-60 mr-3"
				year="2023"
				caption="Adopted a golden retriever named Pixel"
				color="var(--color-teal-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
				pos="2/7"
				classes="mr-15 w-75 right-9"
				year="2024"
				caption="Exploring the hidden valleys of the Alps"
				color="var(--color-sky-200)"
				/>
				<EventCard
				url="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
				pos="9/13"
				classes="ml-21 w-60"
				year="2025"
				caption="Leading my own engineering team now"
				color="var(--color-rose-200)"
				/>
			</>

			<div
				className="z-1 w-20 aspect-square gap-0 relative p-0 border-none ml-33 bg-white shadow rounded-full flex justify-center items-center"
				style={{ gridRow: "5/10" }}
			>
				<Icon
				icon="line-md:question"
				className="w-full h-full box-border p-4.5"
				/>
				<p className="absolute -bottom-4.5 text-xs"> What's next...? </p>
			</div>

		</section>
	);

};

export default HorizontalTimeline;
