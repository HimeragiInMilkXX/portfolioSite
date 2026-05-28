import type { FunctionComponent } from "react"
import HashSection from "../buildingBlocks/HashSection"
import RolesBlock from "../buildingBlocks/RolesBlock"
import { Check } from "lucide-react"

const ServiceList: FunctionComponent<{ services: string[] }> = ({ services }) => {

    return (

        <ul>
            { services.map( s => <li className="flex gap-1.5 items-center text-xl m-3"> <Check className="stroke-2 stroke-green-500"/> {s} </li> )}
        </ul>

    )

}

const Roles = () => {

    return (

        <HashSection id="roles" classes="max-lg:px-3 w-full gap-x-18 gap-y-12 flex flex-wrap justify-center items-center">

            <RolesBlock url="/home/design.png" role="Designer" classes="max-w-80" works={{

                    "Blog Post Page Design": "/home/roles/designer/blog_post.png",
                    "Old Portfolio About Page Design": "/home/roles/designer/old_portfolio_about.png",
                    "Foregin Campus Home Page Design": "/home/roles/designer/foregin_home.png",

                }}>

                I provide design services mainly for<br/>
                <ServiceList services={["UI Design", "UX Design", "Layout Design", "Navigation Design", "Animation Design"]}/>
                I obtain most of my skills in 4 year studies in university. By engaging into the <span className="bg-green-100">Web Design and Direction Zemi</span>, working on personal projects and
                participating in exhibitions. I am good at <span className="bg-yellow-200">flat</span> and <span className="bg-yellow-200">flat 3.0</span> design, and I usually use <span className="bg-yellow-200">Figma</span> as the tool to design.

            </RolesBlock>
            <RolesBlock url="/home/fullstack.png" role="Fullstack Developer" classes="max-w-104 max-lg:max-w-80!" works={{

                "First Version Main Gimmick": "/project/portfolio_site/design/change.gif",
                "First Version - Draft": "/project/portfolio_site/design/first_draft.jpeg",
                "Home Page - First Version": "/project/portfolio_site/design/first_example_one.png",
                "Skills Page - First Version": "/project/portfolio_site/design/first_example_two.png",
                "Project Page - Brainstorm Draft": "/project/portfolio_site/design/project_draft.jpeg"

            }}>

                I provide development services mainly for<br/>
                <ServiceList services={["Frontend", "Backend", "Fullstack", "CMS System", "DevOps", "AI Code Debug"]}/>
                I obtain most of my skills in 2 years of self-study and 4 years of college. I have been working on studio websites and personal projects, also have been programming in Java since high school. I am good at <span className="bg-yellow-200">Java</span> and <span className="bg-yellow-200">Typescript</span> and <span className="bg-yellow-200">Vue</span>, and I usually use <span className="bg-yellow-200">VS Code</span> as the environment.


            </RolesBlock>
            <RolesBlock url="/home/sing.png" role="Singer" classes="max-w-88" works={{

                "First Version Main Gimmick": "/project/portfolio_site/design/change.gif",
                "First Version - Draft": "/project/portfolio_site/design/first_draft.jpeg",
                "Home Page - First Version": "/project/portfolio_site/design/first_example_one.png",
                "Skills Page - First Version": "/project/portfolio_site/design/first_example_two.png",
                "Project Page - Brainstorm Draft": "/project/portfolio_site/design/project_draft.jpeg"

            }}>

                I mainly sing and perform a few regions of songs
                <ServiceList services={["Jpop", "Cantopop", "Kpop"]}/>
                I have been receiving proper vocal education for 2 years and obtained few performing experiences. This is just my dream and hobby yet I still identify myself as a singer.
                If you are interested in my voice(?), please check our my <a href="https://www.instagram.com/thefreaktake/" target="_blank" className="underline text-blue-900"> @thefreaktake instagram account! </a>


            </RolesBlock>

        </HashSection>

    )

}

export default Roles