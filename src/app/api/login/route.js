import { encrypt } from "@/utils/encryption";
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
            let token = `${data.sesId}_${a_id}`

            token = encrypt(token)

            return new Response(JSON.stringify({
                status: "success",
                name: data.namaLengkapk,
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