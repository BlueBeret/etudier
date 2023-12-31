import { Just_Another_Hand } from "next/font/google"
import Image from "next/image"
import Qrcode from "./qrcode";

const JustAnotherHandFont = Just_Another_Hand({
    subsets: ['latin'],
    weight: ['400'],
})

const randomHexString = () => Math.floor(Math.random() * 16).toString(16);
const generateRandomHexString = (length) => [...Array(length)].map(randomHexString).join('');

export default function Khs({ name, orderNo, data, theme, order_no }) {
    let date = new Date()

    return <div id="khs" className={`khs ${theme} flex flex-col w-[340px] px-4 items-center gap-3 hover:cursor-pointer`}>
        <div className="flex flex-col text-center pt-4 w-full">
            <h1 className={`${JustAnotherHandFont.className} text-[40px]`}>
                Étudier
            </h1>
            <span className=" text-center">
                367 Willow Lane<br></br>Pelican Town 15423
            </span>
        </div>
        <div className="uppercase flex  w-full leading-4">
            <div className="flex flex-col items-start">
                <div>order #{orderNo}</div>
                <div>{name}</div>
            </div>
            <div className="ml-auto flex flex-col items-end">
                <div>{date.getFullYear()}/{date.getMonth()}/{date.getDate()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
                <div>Main Register</div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-2 leading-5 uppercase border themed-border border-l-0 border-r-0 border-b-0 border-dashed pt-2">
            {data?.khs.khs.map((mk) => {
                return <div className="flex flex-row w-full gap-2">
                    <div className="w-full">{mk.nama}</div>
                    <div className="w-[32px]">X {mk.sks}</div>
                    <div className="w-[80px] text-right">$ {mk.nilai}</div>
                </div>
            })}
        </div>
        <div className="w-full flex flex-col  leading-5 uppercase border themed-border border-l-0 border-r-0 border-b-0 border-dashed py-2">
            <div className="w-full flex flex-row ml-auto justify-end">
                <div>
                    item count  :
                </div>
                <div className=" w-14 text-right">
                    {data?.khs.ips.split('/')[1].slice(0, 2)}
                </div>
            </div>
            <div className="w-full flex flex-row ml-auto justify-end">
                <div>
                    Total  :
                </div>
                <div className=" w-14 text-right">
                    ${parseFloat(data?.khs.ips.split('/')[0]).toFixed(2)}
                </div>
            </div>
            <div className="w-full flex flex-row ml-auto justify-end text-[28px]">
                <div>
                    rating  :
                </div>
                <div className=" w-14 text-right">
                    ${data?.khs.ips.split('/')[1].slice(4).trim()}
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col items-center border themed-border border-l-0 border-r-0 border-b-0 border-dashed pt-4 pb-2 gap-2">
            <p className="text-center w-[300px]">
                It's Not the Result That's Important, It's Who You Become in The Process of Achieving the Result.
            </p>
            <div className="flex flex-col items-center">
                <Qrcode theme={theme}/>
                <span className="text-[10px] text-center ">etudier.lurifos.dev</span>
            </div>
        </div>
        <div className="mt-auto ml-auto text-[10px]">
            ID {generateRandomHexString(6)}-{generateRandomHexString(6)}-{generateRandomHexString(6)}-{generateRandomHexString(6)}
        </div>
    </div >
}