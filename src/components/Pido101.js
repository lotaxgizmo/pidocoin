import React from 'react'
import howto01 from '../assets/howto01.png'
import howto02 from '../assets/howto02.png'
import howto03 from '../assets/howto03.png'
import howtotxt from '../assets/howtotxt.png'
import howtomaster from '../assets/howtomaster.png'

function Pido101() {
    return (
        <div className='flex flex-col items-center justify-center relative p-4'>

            <img src={howtotxt} alt="" className='mb-10 lg:mb-auto' />
            <img src={howtomaster} alt="" className='hidden lg:flex p-12' />

            <div className="them flex lg:hidden flex-col justify-center items-center p">
                <img src={howto01} alt="" className='m-2' />
                <img src={howto02} alt="" className='m-2' />
                <img src={howto03} alt="" className='m-2' />

            </div>

        </div>
    )
}

export default Pido101