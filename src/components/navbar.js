// create a navbar with 4 menu: home, about, privacy policy, contact
import React from "react"
import Link from 'next/link'

    

export default function Navbar(params) {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/privacy-policy">
                        Privacy Policy
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}