import React from 'react'
import jointxt from '../assets/jointxt.svg'
import footerimg from '../assets/footerimg.svg'
import buypidocoinbtnwhite from '../assets/buypidocoinbtnwhite.svg'
import footertxt from '../assets/footertxt.svg'
import twitterbtn from '../assets/twitterbtn.svg'
import telegrambtn from '../assets/telegrambtn.svg'


function Footer() {
    return (
        <div className='flex flex-col items-center justify-center relative bg-[#9C6419] py-10 px-4'>
            <img src={jointxt} alt="" />




            <div className="btns flex flex-row justify-center itece">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={buypidocoinbtnwhite} alt="" className='m-2 w-40 lg:w-auto' />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={twitterbtn} alt="" className='m-2 w-12 lg:w-auto' />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={telegrambtn} alt="" className='m-2 w-12 lg:w-auto' />
                </a>
            </div>
            <img src={footertxt} alt="" />
        </div>
    )
}

export default Footer