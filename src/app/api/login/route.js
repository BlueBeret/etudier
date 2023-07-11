import { encrypt } from "@/utils/encryption";
import { getSemester } from "@/utils/parser";
const randomHexString = () => Math.floor(Math.random() * 16).toString(16);
const generateRandomHexString = (length) => [...Array(length)].map(randomHexString).join('');

export async function POST(req) {
    const request = await req.json()

    const login_url = process.env.LOGIN_URL

    const {
        ugmId,
        password
    } = request

    const a_id = generateRandomHexString(16);
    try {
        const res = await fetch(login_url, {
            method: 'POST',
            headers: {
                "UGMFWSERVICE": "1",
                "User-Agent": "Etudier/1.0.0",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `username=${ugmId}&password=${password}&aId=${a_id}`
        })


        // check status code
        if (res.status === 200) {
            const data = await res.json()
            let cookie = res.headers.get('set-cookie')
            console.log(cookie)
            let token = `${cookie}_${a_id}`

            token = encrypt(token)

            // get avaiable semester

            const semester_res = await fetch(`${process.env.SEMESTER_URL}`, {
                headers: {
                    "Authorization": `Bearer ${data.sesId}`,
                    "User-Agent": "Etudier/1.0.0",
                    "Cookie": cookie.split(';')[0]
                }
            })

            return new Response(JSON.stringify({
                status: "success",
                name: data.namaLengkap,
                semester: getSemester(await semester_res.text()),
            }), {
                status: 200,
                headers: {
                    "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict;`,
                    "Content-Type": "application/json",
                }
            })

        } else {
            return new Response(JSON.stringify({
                status: "error"
            }), {
                status: 400,
            })
        }

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            status: "error"
        }), {
            status: 500,
        })
    }
}