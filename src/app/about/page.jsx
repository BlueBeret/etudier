import { Just_Another_Hand } from "next/font/google"

const JustAnotherHandFont = Just_Another_Hand({
    weight: ['400'],
    subsets: ["latin"]
})

export default function name(params) {
    return <div className="flex flex-col gap-6 pt-12 items-center max-w-lg mx-auto px-4 py-2">
        <section>
            <h1 className={JustAnotherHandFont.className + ' text-6xl font-bold text-center'}>About Étudier</h1>
            <p className="text-center">Étudier is an app to print your study result in a "receipt" like format. This is my side project that was inspired by <a className="link" href="https://receiptify.herokuapp.com/about.html" target="_blank">receiptify</a>.</p>
        </section>
    </div>
}