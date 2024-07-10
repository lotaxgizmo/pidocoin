import React from 'react'
import herotxt from '../assets/herotxt.png'
import bannerimg from '../assets/bannerimg.svg'
import herobgoverlay from '../assets/herobgoverlay.svg'
import buypidocoinbtn from '../assets/buypidocoinbtn.svg'
import raydiumbtn from '../assets/raydiumbtn.svg'
import heroimgfront from '../assets/heroimgfront.svg'
import contractadd from '../assets/contractadd.svg'

function Home() {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-start justify-center relative lg:px-0 p-4'>


                <div className="pido relative flex flex-col justify-center items-center lg:items-start ">
                    <img src={herobgoverlay} alt="" className='-z-10 absolute lg:-top-32' />
                    <img src={herotxt} alt="" />

                    <p className='lg:text-3xl my-2 lg:text-left text-center lg:pl-3 w-[750px]'>
                        PIDO, THE TWO SWEETEST THINGS IN THE WORLD HAS JOINED FORCES TO BECOME SOMETHING EVEN SWEETER.
                    </p>
                    <p className='lg:text-3xl my-2 lg:text-left text-center lg:pl-3 w-[800px] text-[#EE3B23]'>
                        CONTRACT ADDRESS
                    </p>


                    <img src={contractadd} alt="" className='m-2 w-10/12 lg:w-auto' />
                    <div className="btn flex flex-col lg:flex-row ">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={buypidocoinbtn} alt="" className='m-2 w-60 lg:w-auto' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={raydiumbtn} alt="" className='m-2 w-60 lg:w-auto' />
                        </a>
                    </div>
                </div>


                <div className="image">
                    <img src={heroimgfront} alt="" />
                </div>

            </div>
            <img src={bannerimg} alt="" className='w-full' />
        </>
    )
}

export default Home