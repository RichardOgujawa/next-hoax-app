import Link from "next/link"
import { FaFacebook, FaBehance, FaTwitter, FaBars} from 'react-icons/fa';


export default function Navbar (){
  return (
    <div className="fixed w-full bg-[#f5f5f5] h-20 flex items-center px-10 border-b-2 border-b-gray-400 z-50" style={{}}>
        <div className=" w-full flex basis-2/3">
            {/* Logo */}
            <Link href='/'>    
                    <span className="font-bold text-xl">HO<span className="text-gray-400">AX</span></span>
            </Link>
        </div>

        <div className="flex gap-3 basis-1/3 justify-between w-full">
            {/* Navigation Links */}

                <ul className="hidden lg:flex text-xs gap-5 uppercase text-gray-500">
                    <li className="hover:text-gray-900">
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-gray-900">
                        <Link href='/#latest-work'>
                            Work
                        </Link>
                    </li>
                    <li className="hover:text-gray-900">
                        <Link href='/#contact-us'>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <div className="flex lg:hidden w-full justify-end">
                    <FaBars className="inline-block lg:hidden cursor-pointer"></FaBars>
                </div>
            {/* Social Media Links */}
                <ul className="hidden lg:flex gap-5 text-lg ">
                    <li>
                        <Link href="https://www.facebook.com/">
                            <FaFacebook className=" hover:text-gray-500"></FaFacebook>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.behance.net/">
                            <FaBehance className=" hover:text-gray-500"></FaBehance>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/">
                            <FaTwitter className=" hover:text-gray-500"></FaTwitter>
                        </Link>
                    </li>
                </ul>
        </div>
    </div>
  )
}
