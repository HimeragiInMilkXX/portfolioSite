import { Icon } from "@iconify/react"

function Footer() {

    return (

        <footer className="max-[430px]:justify-center md:mt-36 md:px-12 p-6 bg-gray-300 flex justify-between items-center mt-21 relative z-1">

            <div className="max-[430px]:hidden flex gap-4.5">
                <a href="https://www.instagram.com/kiperformra2425/" target="_blank">
                    <Icon icon="mdi:instagram" width="24" height="24" />
                </a>
                <a href="https://github.com/HimeragiInMilkXX" target="_blank">
                    <Icon icon="mdi:github" width="24" height="24" />
                </a>
                <a href="https://x.com/kiperformra2425" target="_blank">
                    <Icon icon="pajamas:twitter" width="22" height="22" className="mx-0.5" />
                </a>
                {/* <a href="">
                    <Icon icon="mdi:linkedin" width="24" height="24" />
                </a> */}
            </div>

            <small> Copyright Ang Chun Ho@2026</small>

        </footer>

    )

}

export default Footer;