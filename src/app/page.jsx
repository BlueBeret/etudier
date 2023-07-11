import Login from '@/components/Home/Login'
import Main from '@/components/Home/Main'
import { Just_Another_Hand } from 'next/font/google'

const JustAnotherHandFont = Just_Another_Hand({
  subsets: ['latin'],
  weight: ['400'],
})
export default function Home() {
  function alreadyLogin() {
    return true
  }
  return (
    <div className='flex flex-col gap-6 pt-12 items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className={JustAnotherHandFont.className + ' text-6xl font-bold text-center'}>Étudier</h1>
        <h2 className='text-center text-base'>Get your fancy study result card, exclusive for UGM students</h2>
      </div>
      {
        alreadyLogin() ? (<Main/>) :
        <Login/>
      }
    </div>
  )
}
