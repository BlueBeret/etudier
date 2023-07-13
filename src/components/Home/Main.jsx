"use client"
import Link from "next/link"
import { useState } from "react"
import Khs from "./KHS"
import Swal from "sweetalert2"


export default function Main({ name, setName, semester, setSemester, orderNo }) {
    const [currentSemester, setCurrentSemester] = useState(0)
    const [theme, setTheme] = useState("khs-default")
    const [data, setData] = useState(null)

    const handlePrint = () => {
        Swal.fire({
            title: 'Generating KHS',
            html: 'Please wait while we generate your KHS',
            didOpen: () => {
                Swal.showLoading()
            }
        })

        fetch('/api/khs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                semester: currentSemester
            })
        }).then(res => {
            if (res.ok) {
                res.json().then(data => {
                    setData(data)
                }).catch(err => {
                    Swal.fire({
                        title: 'Error',
                        html: `Something went wrong, please try again later. If this problem persists, please <a class="link" href="mailto:bugreport@lurifos.dev?body=I Would like to report this error ${err}>contact us</a>`,
                    }
                    )
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    html: `Something went wrong, please try again later. If this problem persists, please <a class="link" href="mailto:bugreport@lurifos.dev?body=I Would like to report this error ${err}>contact us</a>`,
                }
                )
            }
        }).catch(err => {
            Swal.fire({
                title: 'Error',
                html: `Something went wrong, please try again later. If this problem persists, please <a class="link" href="mailto:bugreport@lurifos.dev?body=I Would like to report this error ${err}>contact us</a>`,
            }
            )
        })
        Swal.close()

    }
    
    return <div className="flex flex-col w-full items-center gap-3">
        <input placeholder="Your Name" className="input-text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <select className={`input-select ${currentSemester == 0 ? "text-gray-400" : ""}`} value={currentSemester} onChange={(e) => setCurrentSemester(e.target.value)}>
            <option value={0} disabled>choose semester</option>
            {semester.map((item, index) => {
                if (item.id == '') {
                    return
                }
                return <option value={item.id} key={index} className="text-secondary">{item.name}</option>
            })
            }
        </select>
        <select className="input-select" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="khs-default">Default Theme</option>
            <option value={1}>Etudier</option>
        </select>
        <div className="w-[300px] flex justify-end">
            <button className="btn-primary" onClick={() => handlePrint()}>Generate</button>
        </div>
        <Khs name={name} data={data} theme={theme} orderNo={orderNo} />
        <div>
            <p>
                You may need to re-login in your simaster mobile app after using this service. <Link className="link" href="/faq#trustissue">
                    Have trust issue?
                </Link>
            </p>
        </div>
    </div>
}