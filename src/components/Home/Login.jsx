"use client"
import Link from "next/link"
import { useState } from "react"
import Swal from "sweetalert2"

export default function Login(params) {
    const [ugmId, setUgmId] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        Swal.fire({
            title: "Login",
            text: "Please wait...",
            didOpen: () => {
                Swal.showLoading()
            }
        })
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                ugmId: ugmId,
                password: password
            })
        }).then(res => res.json()).then(res => {
            if (res.status == "success") {
                params.setName(res.name)
                params.setSemester(res.semester)
                params.setIsLoggedIn(true)
                Swal.close()
            } else {
                Swal.fire({
                    title: "Login Failed",
                    text: res.message,
                    icon: "error"
                })
            }
        }).catch((err) => {
            Swal.fire({
                title: "Login Failed",
                html: "Something went wrong, please contact <a class='link' href='mailto:me@lurifos.dev'>me</a> to report this issue",
            })
        })
    }
    return <div className="flex flex-col w-full items-center gap-3">
        <div className="flex flex-col gap-1 ">
            <input placeholder="ugm id" className="input-text" value={ugmId} onChange={(e) => setUgmId(e.target.value)}></input>
            <label className="text-secondary opacity-50">*without @mail.ugm.ac.id</label>
        </div>
        <input placeholder="password" type="password" className="input-text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <div className="w-[300px] flex justify-end">
            <button className="btn-primary" onClick={handleLogin}>Login</button>
        </div>
        <div>
            <p className="">
                <span className="font-semibold text-red-500">Warning! </span>
                You may need to re-login in your simaster mobile app after using this service. <Link className="link" href="/faq#trustissue">
                    Have trust issue?
                </Link>
            </p>
        </div>
    </div>
}