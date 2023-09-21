import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Welcome</h1>
      <p className='mb-5'>
        This is a demo site featuring NextJS & Clerk.  Your credentials will be saved on the backend hosted at <Link href='https://clerk.com' target='_blank' rel='noopener noreferrer' className='text-emerald-600 underline hover:text-emerald-800'>clerk.com</Link>.
      </p>
    </>
  )
}
