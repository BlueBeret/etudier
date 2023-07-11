"use client"
import Link from "next/link"
import { useState } from "react"

export default function Login(params) {
    const [ugmId, setUgmId] = useState("")
    const [password, setPassword] = useState("")

    return <div className="flex flex-col w-full items-center gap-3">
        <div className="flex flex-col gap-1 ">
            <input placeholder="ugm id" className="input-text"></input>
            <label className="text-secondary opacity-50">*without @mail.ugm.ac.id</label>
        </div>
        <input placeholder="password" className="input-text"></input>
        <div className="w-[300px] flex justify-end">
        <button className="btn-primary">Login</button>
        </div>
        <div>
            <p>
                You may need to re-login in your simaster mobile app after using this service. <Link className="link" href="/faq#trustissue">
                Have trust issue?
                </Link>
            </p>
        </div>
    </div>
}