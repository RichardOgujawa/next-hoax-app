import Link from "next/link"

const Header = () => {
  return (
    <main className='bg-[url(https://images.unsplash.com/photo-1672843386042-ec530be0a5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)] h-[100vh] w-full md:h-[75vh]'>
        <div className="w-full h-full relative">
            <h1 className="font-bold text-gray-400 absolute grid gap-y-2 top-1/2 -translate-y-[100%] px-10">
                <span className="uppercase text-3xl">Hello!</span>
                <span className="uppercase text-6xl"><span className="text-gray-900">We are ho</span>ax</span>
                <span className="capitalize">Creative digital media</span>
            </h1>
   
            <Link className='bg-gray-900 py-3 px-8 rounded-full text-sm uppercase text-white absolute top-3/4 left-1/2 -translate-y-[100%] -translate-x-[50%]' href="mailto:info@hoax.com?cc=richardogujawa7@gmail.com&subject=Let's Get To Work!">Hire us now</Link>       
        </div>
    </main>
  )
}

export default Header