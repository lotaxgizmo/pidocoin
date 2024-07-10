import React from 'react'
// import herotxt from '../assets/herotxt.svg'
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
            <div className='flex flex-col lg:flex-row items-center justify-center relative'>


                <div className="pido relative flex flex-col justify-center items-center lg:items-start ">
                    <img src={herobgoverlay} alt="" className='-z-10 absolute lg:-top-32' />
                    <img src={herotxt} alt="" />
                    <img src={contractadd} alt="" className='m-2 w-10/12 lg:w-auto' />
                    <div className="btn flex flex-col lg:flex-row ">
                        <img src={buypidocoinbtn} alt="" className='m-2 w-60 lg:w-auto' />
                        <img src={raydiumbtn} alt="" className='m-2 w-60 lg:w-auto' />
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