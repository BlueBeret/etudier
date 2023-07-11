import Link from "next/link"
import { Just_Another_Hand } from "next/font/google"

const JustAnotherHandFont = Just_Another_Hand({
    subsets: ['latin'],
    weight: ['400'],
})

const footerLink = [
    {
        name: "Github",
        link: "https://github.com/blueberet"
    }, {
        name: "Twitter",
        link: "https://twitter.com/lurifos"
    }, {
        name: "Email",
        link: "mailto:me@lurifos.dev"
    }
]

export default function footer(params) {
    return <div className="flex flex-col gap-2 w-[90%] max-w-lg mx-auto items-center border-t-accent border-t-2 py-[10px] mt-6">
        <div>
            <span >Étudier</span> by <Link className="link" href="https://lurifos.dev">
                Lurifos</Link> &copy; 2023
        </div>
        <div> {footerLink.map((link, index) => {
            return <span key={index}>
                <Link className="link" href={link.link}>
                    {link.name}
                </Link>
                {index != footerLink.length - 1 ? " | " : ""}
            </span>
        })
        }
        </div>
    </div>
}