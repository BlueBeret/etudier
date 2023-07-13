import { decrypt } from "@/utils/encryption"
import { parseKHS } from "@/utils/parser"

export async function POST(req) {
    let cookies = req.headers.get('Cookie')

    if (cookies) {
        const token = cookies.split(';').filter(item => item.trim().startsWith('token='))[0].split('=')[1]
        let decrypted_token = JSON.parse(decrypt(token))
        let cookie = decrypted_token.cookie
        let semester = await req.json()

        semester = semester.semester
        let url = "https://simaster.ugm.ac.id" + `${process.env.KHS_URL}${semester}`

        const res = await fetch(url, {
            headers: {
                "User-Agent": "Etudier/1.0.0",
                "Cookie": cookie.split(';')[0]
            }
        })

        const data = await res.text()

        if (res.status === 200) {
            let khs = parseKHS(data)
            return new Response(JSON.stringify({
                status: "success",
                khs: khs
            }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                }
            })
        } else {
            return new Response(JSON.stringify({
                status: "error",
                message: "Something went wrong"
            }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                }
            })
        }
    }

    return new Response(JSON.stringify({
        status: "You don't have permission to access this page"
    }), {
        status: 403,
        headers: {
            "Content-Type": "application/json",
        }
    })
}