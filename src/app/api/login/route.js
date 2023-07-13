import { encrypt } from "@/utils/encryption";
import { getSemester } from "@/utils/parser";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URL

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



export async function POST(req) {
    const request = await req.json()

    const login_url ="https://simaster.ugm.ac.id" + process.env.LOGIN_URL

    const {
        ugmId,
        password
    } = request

    const a_id = '';  // intentional, to avoid flooding the login history
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
            let une_token = {
                cookie: cookie,
                a_id: a_id
            }

            const token = encrypt(JSON.stringify(une_token))

            // get avaiable semester

            const semester_res = await fetch(`https://simaster.ugm.ac.id${process.env.SEMESTER_URL}`, {
                headers: {
                    "Authorization": `Bearer ${data.sesId}`,
                    "User-Agent": "Etudier/1.0.0",
                    "Cookie": cookie.split(';')[0]
                }
            })

            // get and update counter mongodb
            await client.connect()
            const count = await client.db('etudier').collection("counter").findOneAndUpdate(
                {
                    name:"usercounter"

                }, {
                    $inc: {count:1}
            })

            var counter = count.value.count? ('000000000' + count.value.count).substr(-6) : "invalid"

            return new Response(JSON.stringify({
                status: "success",
                name: data.namaLengkap,
                orderNo: counter,
                semester: getSemester(await semester_res.text()),
            }), {
                status: 200,
                headers: {
                    "Set-Cookie": `token=${token}; Path=/; HttpOnly;  expires=${new Date(Date.now() + 1000 * 60 * 60 * 24).toUTCString()}`,
                    "Content-Type": "application/json",
                }
            })

        } else {
            return new Response(JSON.stringify({
                status: "error",
                message: "Your username or password is incorrect"
            }), {
                status: 400,
            })
        }

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            status: "error",
            message: "Something went wrong on our side, if this problem persists please contact us"
        }), {
            status: 500,
        })
    }
}
