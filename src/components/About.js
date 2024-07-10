import React from 'react'
import aboutimg from '../assets/aboutimg.svg'
import aboutpido from '../assets/aboutpido.svg'
import buypidocoin2 from '../assets/buypidocoin2.svg'
import buyradium2 from '../assets/buyradium2.svg'
import aboutbgimg from '../assets/aboutbgimg.svg'

function About() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center relative'>



            <div className="left lg:w-6/12 p-10">
                <img src={aboutimg} alt="" />
            </div>
            <div className="right lg:w-6/12 p-3">
                <img src={aboutpido} alt="" />


                <p className='lg:text-xl my-4 lg:text-left text-center lg:pl-3'>
                    Pineapple dog is the most loyal tropical companion. he is the first and only dog wif pineapple hat on Solana. dog szn is all year around for pineapple dog. and just like the fruit on his head he is here to introduce you to the sweeter side of crypto while reminding you that the pineapple hat stays on!
                    <br />
                    <br />
                    $PIDO is about building community on Solana. we encourage everyone to touch grass and eat as much pineapple as humanly possible. Even better, you can preserve the outer shell of a pineapple and use it as a hat for your own dog. take a picture and tag us on twitter.
                </p>


                <div className="btns flex flex-col lg:flex-row justify-around items-center ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={buypidocoin2} alt="" className='w-60 lg:w-auto m-2' />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={buyradium2} alt="" className='w-60 lg:w-auto m-2' />
                    </a>

                </div>
            </div>
            <img src={aboutbgimg} alt="" className='absolute -z-10 w-full' />
        </div>
    )
}

export default About