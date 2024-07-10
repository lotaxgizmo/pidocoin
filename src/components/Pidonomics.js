import React from 'react'
import pidonomics2txt from '../assets/pidonomics2txt.png'
import pidonomicstxt from '../assets/pidonomicstxt.png'
import tokenomics from '../assets/tokenomics.png'
import totaltxt from '../assets/totaltxt.png'
import bannerimg from '../assets/bannerimg.svg'

import tk5box from '../assets/tk5box.png'
import tk4box from '../assets/tk4box.png'
import tk3box from '../assets/tk3box.png'
import tk2box from '../assets/tk2box.png'
import tk1box from '../assets/tk1box.png'
import tokebg from '../assets/tokebg.png'

function Pidonomics() {
    return (
        <>
            <div className=' flex flex-col items-center justify-center relative p-4'>
                <img src={pidonomicstxt} alt="" className='lol my-3' />
                <img src={pidonomics2txt} alt="" className='lol my-3' />
                <img src={totaltxt} alt="" className='lol my-3' />
                <img src={tokenomics} alt="" className='lol my-3 hidden lg:flex' />


                <div className="toke block lg:hidden">
                    <img src={tk1box} alt="" className='w-96 my-3' />
                    <img src={tk2box} alt="" className='w-96 my-3' />
                    <img src={tk3box} alt="" className='w-96 my-3' />
                    <img src={tk4box} alt="" className='w-96 my-3' />
                    <img src={tk5box} alt="" className='w-96 my-3' />
                </div>
                <img src={tokebg} alt="" className='absolute -z-10 top-0 w-full mix-blend-overlay flex lg:hidden' />
            </div>
            <img src={bannerimg} alt="" className='w-full' />
        </>
    )
}

export default Pidonomics