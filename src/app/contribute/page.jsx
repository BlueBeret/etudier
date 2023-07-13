import { Just_Another_Hand } from "next/font/google"
const JustAnotherHandFont = Just_Another_Hand({
    subsets: ['latin'],
    weight: ['400']
})


export default function name(params) {
    return <div className="flex flex-col gap-6 pt-12 items-center max-w-lg mx-auto px-4 py-2">
        <section className="flex flex-col gap-2">
            <h1 className={JustAnotherHandFont.className + ' text-6xl font-bold text-center'}>Contributing</h1>
            <p className="text-center">Want to add more themes? add more functionality? or just want to fix a bug? Your contribution are very welcome. Just create a pull request at <a className="link" href="https://github.com/BlueBeret/etudier" target="_blank">here</a>.</p>
            <p className="text-center">You're not a programmer? or have some questions? Just contact me at <a className="link" href="https://twitter.com/lurifos">twitter</a> or at <a className="link" href="https://lurifos.dev/askme">here</a>.</p>
        </section>
    </div>
}