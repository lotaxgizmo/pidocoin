import React from 'react'
import faqtxt from '../assets/faqtxt.png'
import faq2txt from '../assets/faq2txt.png'
import q3 from '../assets/q3.svg'
import q2 from '../assets/q2.svg'
import q1 from '../assets/q1.svg'

function Faq() {
    return (
        <div className='flex flex-col items-center justify-center relative my-10'>
            <img src={faqtxt} alt="" />
            <img src={faq2txt} alt="" />



            <div className="faqqq">
                <img src={q1} alt="" className='p-3' />
                <img src={q2} alt="" className='p-3' />
                <img src={q3} alt="" className='p-3' />
            </div>
        </div>
    )
}

export default Faq