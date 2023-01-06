import Image from 'next/image'
import ImageGrid from './ImageGrid'

const LatestWork = () => {
  return (
    <>
        <div id="latest-work" className='w-full mt-[3rem]'>
            <h2 className= 'text-center font-bold text-2xl uppercase'>Latest Work</h2>
        </div>
        <span className=' w-10 h-1 bg-gray-300 inline-block absolute left-1/2 -translate-x-1/2'></span>
        
        <section className='p-[4rem]'> 
            <ImageGrid></ImageGrid>
        </section>

    </>
  )
}

export default LatestWork
