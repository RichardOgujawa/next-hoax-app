import Link from "next/link"

const Contact = () => {
  return (
    <div className="w-full bg-gray-200 grid place-items-center p-[5rem] text-center">
        <h2 className="font-bold text-2xl py-[1rem]">Interested in working with us?</h2>
        <p className="py-[1rem]">Let&apos;s talk now!</p>

        <Link className='bg-gray-900 py-3 px-8 rounded-full text-sm uppercase text-white' href="mailto:info@hoax.com?cc=richardogujawa7@gmail.com&subject=Let's Get To Work!">Hire us now</Link>    
    </div>
    
  )
}

export default Contact