import { Poppins } from 'next/font/google'
import Head from 'next/head'
import Navbar from './navbar'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200', '400', '600', '800']
})
 
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Startup</title>
      </Head>
      <main className={`${poppins.className}`}>
        <Navbar />
        {children}
      </main>
    </>
  )
}