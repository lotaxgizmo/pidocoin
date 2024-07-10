import React from 'react'
import pidonomics2txt from '../assets/pidonomics2txt.png'
import pidonomicstxt from '../assets/pidonomicstxt.png'
import tokenomics from '../assets/tokenomics.png'
import totaltxt from '../assets/totaltxt.png'
import bannerimg from '../assets/bannerimg.svg'

function Pidonomics() {
    return (
        <>
            <div className='flex flex-col items-center justify-center relative p-4'>
                <img src={pidonomicstxt} alt="" className='lol my-3' />
                <img src={pidonomics2txt} alt="" className='lol my-3' />
                <img src={totaltxt} alt="" className='lol my-3' />
                <img src={tokenomics} alt="" className='lol my-3' />
            </div>
            <img src={bannerimg} alt="" className='w-full' />
        </>
    )
}

export default Pidonomics