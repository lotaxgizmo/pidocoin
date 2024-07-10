import React from 'react'
import logotxt from '../assets/logotxt.svg'
import twitterbtn from '../assets/twitterbtn.svg'
import telegrambtn from '../assets/telegrambtn.svg'
import about from '../assets/about.svg'
import com from '../assets/com.svg'
import pido from '../assets/pido.svg'

function Header() {
    return (
        <div className='flex flex-row items-center justify-between w-full relative px-4 lg:px-24 my-4'>
            <img src={logotxt} alt="" />

            <div className="menu  flex-row justify-between hidden lg:flex">

                <a href="#"><img src={about} alt="" className='mx-3' /></a>
                <a href="#"><img src={com} alt="" className='mx-3' /></a>
                <a href="#"><img src={pido} alt="" className='mx-3' /></a>

            </div>

            <div className="btns flex flex-row justify-center itece">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={twitterbtn} alt="" className='m-2 w-12 lg:w-auto' />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={telegrambtn} alt="" className='m-2 w-12 lg:w-auto' />
                </a>
            </div>
        </div>
    )
}

export default Header