import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImageDataPhoto } from './ImageDataPhoto'


const ImageGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-2">
        {ImageDataPhoto.map((item, index) => {
            return( 
                <Link classname="block" key={index} href={item.link} legacyBehavior>
                    <a classname="block">
                        <Image
                        src={item.image}
                        alt='/'
                        width="640"
                        height="800"
                        className=' object-cover'/>
                    </a>
                </Link>
            )
        })}
    </div>
  )
}

export default ImageGrid