import { Just_Another_Hand } from "next/font/google"
const JustAnotherHandFont = Just_Another_Hand({
    subsets: ['latin'],
    weight: ['400']
})


export default function name(params) {
    const faq = [{
        question: "I'd like to donate, do you have saweria or something like that?",
        id: "donation",
        answer: <>Thank youu &lt;3 I really appreciate it but currently I don't accept any donation. If you like Étudier, you can give it star/like at <a href="https://github.com/blueberet/etudier" className="link">Étudier Github</a>.</>
    },
    {
        question: "Is this app legal and safe to use?",
        id: "legal",
        answer: "I am not quite sure, this app use simaster api which may or may not an illegal action."
    },
    {
        question: "Do you use or save my data?",
        id: "trustissue",
        answer: "No, I don't save, use, or sell your data. This application is open source and you can access it at my github. The reason why you may need to re-login (in your simaster mobile app) is because Étudier use simaster mobile api which only allow one device to be logged in at the same time. So, if your simaster mobile have a problem after using this app, just logout and login again in your mobile app"
    }
    ]


    return <div className="flex flex-col gap-6 pt-12 items-center max-w-lg mx-auto px-4 py-2">
        <main className="flex flex-col gap-4">
            <h1 className={JustAnotherHandFont.className + ' text-6xl font-bold text-center'}>Frequently Asked Questions</h1>
            {faq.map((e) => {
                return <section id={e.id} className="flex flex-col ">
                    <h2 className="text-center text-xl font-semibold">{e.question}</h2>
                    <p className="text-center">{e.answer}</p>
                </section>
            })}
        </main>
    </div>
}