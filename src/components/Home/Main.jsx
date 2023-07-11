"use client"
import Link from "next/link"
import { useState } from "react"

export default function Main({name, setName, semester, setSemester}) {
    const [currentSemester, setCurrentSemester] = useState(0)
    const [theme, setTheme] = useState(0)

    const handlePrint = ()=> {
        console.log(name, semester, theme)
    }
    return <div className="flex flex-col w-full items-center gap-3">
        <input placeholder="Your Name" className="input-text" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <select className={`input-select ${currentSemester == 0? "text-gray-400":""}`} value={currentSemester} onChange={(e) => setCurrentSemester(e.target.value)}>
            <option value={0} disabled>choose semester</option>
            <option className="text-secondary">2021/2022 - Genap</option>
        </select>
        <select className="input-select" value={theme} onChange={(e)=> setTheme(e.target.value)}>
            <option value={0}>Default Theme</option>
            <option value={1}>Etudier</option>
        </select>
        <div className="w-[300px] flex justify-end">
            <button className="btn-primary" onClick={()=> handlePrint()}>Generate</button>
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