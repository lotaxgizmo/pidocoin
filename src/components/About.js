import React from 'react'
import aboutimg from '../assets/aboutimg.svg'
import aboutpido from '../assets/aboutpido.svg'
import buypidocoin2 from '../assets/buypidocoin2.svg'
import buyradium2 from '../assets/buyradium2.svg'
import aboutbgimg from '../assets/aboutbgimg.svg'

function About() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center relative'>


            <div className="left p-10">
                <img src={aboutimg} alt="" />
            </div>
            <div className="right p-3">
                <img src={aboutpido} alt="" />

                <div className="btns flex flex-col lg:flex-row justify-around items-center ">
                    <img src={buypidocoin2} alt="" className='w-60 lg:w-auto m-2' />
                    <img src={buyradium2} alt="" className='w-60 lg:w-auto m-2' />

                </div>
            </div>
            <img src={aboutbgimg} alt="" className='absolute -z-10 w-full' />
        </div>
    )
}

export default About