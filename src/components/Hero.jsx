import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='m-width-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 md:text-2xl '>GROWING WITH  DATA ANALYTICS</p>
            <h1 className='md:text-8xl sm:text-6xl md:py-8 font-bold text-4xl'>Grow with Data</h1>
            <div className='flex justify-center items-center '>
                <p className='font-bold md:text-5xl sm:4xl text-xl'>Fast, Flexible Financing for </p>
                <ReactTyped className='font-bold md:text-5xl sm:4xl text-xl md:pl-4 pl-2'
                strings={[
                    "BTB",
                    "BTC",
                    "SASS"
                  ]}

                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
            </div>
            <p className='font-bold md:text-2xl text-xl text-gray-500 pt-4'>Monitor your data analytics to improve revenue in BTC, BTB & SASS platforms</p>
            <button className='bg-[#00df9a] hover:scale-105 duration-300 text-black w-[200px] rounded-md  font-medium py-3  my-3 mx-auto'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero