// create a navbar with 4 menu: home, about, privacy policy, contact
"use client"
import React from "react"
import Link from 'next/link'
import { Just_Another_Hand } from "next/font/google"
import {usePathname} from "next/navigation"

const JustAnotherHandFont = Just_Another_Hand({
    subsets: ['latin'],
    weight: ['400'],
})
    

export default function Navbar(params) {
    const pathname = usePathname()

    return <nav className="w-full bg-secondary text-primary px-2 sm:px-6 py-2 sm:h-16">
        <ul className="w-full flex flex-row items-center">
            <li>
                <h1 className={`${JustAnotherHandFont.className} text-4xl text-center hidden sm:block hover:cursor-pointer`} onClick={()=> document.location="/"}>
                    Étudier
                </h1>
            </li>
                <li className="navbar-container w-full flex flex-row flex-wrap gap-2 sm:gap-10 justify-center sm:justify-end text-primary">
                    <Link href="/" className={`${pathname == "/" ? "bg-accent rounded-[60px]" : "link-underline"}`}>
                        Home
                    </Link>
                    <Link href="/about" className={`${pathname == "/about" ? "bg-accent rounded-[60px]" : "link-underline"}`}>
                        About
                    </Link>
                    <Link href="/faq" className={`${pathname == "/faq" ? "bg-accent rounded-[60px]" : "link-underline"}`}>
                        FAQ
                    </Link>
                    <Link href="/contribute" className={`${pathname == "/contribute" ? "bg-accent rounded-[60px]" : "link-underline"}`}>
                        Contribute
                    </Link>
                </li>
            </ul>
        </nav>
}