import React from 'react'
import Single from '../assests/single.png';
import Double from '../assests/double.png';
import Triple from '../assests/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid  md:grid-cols-3 gap-8">
            <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 md:my-0  rounded-lg hover:scale-105 duration-300">
                <img
                    className='bg-transparent w-20 mx-auto mt-[-3rem]  bg-white'
                    src={Single}
                    alt="/"
                />
                <h2 className='text-2xl font-bold py-8 text-center'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='font-medium text-center'>
                  <p className='border-b py-2 mt-7'>500 GB Storage</p>
                  <p className='border-b py-2'>1 Granted User</p>
                  <p className='border-b py-2'>Send upto 2 GB</p>
                </div>
                <button className='bg-black hover:scale-105 duration-300 text-[#00df9a] w-[200px] rounded-md  font-medium py-3  my-3  mx-auto'>Start Trial</button>
                
            </div>
            <div className=" bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
                <img
                    className='bg-transparent w-20 mx-auto mt-[-3rem]  bg-white'
                    src={Double}
                    alt="/"
                />
                <h2 className='text-2xl font-bold py-8 text-center'>Double User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='font-medium text-center'>
                  <p className='border-b py-2 mt-7'>500 GB Storage</p>
                  <p className='border-b py-2'>1 Granted User</p>
                  <p className='border-b py-2'>Send upto 2 GB</p>
                </div>
                <button className='bg-black hover:scale-105 duration-300 text-[#00df9a] w-[200px] rounded-md  font-medium py-3  my-3  mx-auto'>Start Trial</button>
                
            </div>
            <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
                <img
                    className='bg-transparent w-20 mx-auto mt-[-3rem]  bg-white'
                    src={Triple}
                    alt="/"
                />
                <h2 className='text-2xl font-bold py-8 text-center'>Triple User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='font-medium text-center'>
                  <p className='border-b py-2 mt-7'>500 GB Storage</p>
                  <p className='border-b py-2'>1 Granted User</p>
                  <p className='border-b py-2'>Send upto 2 GB</p>
                </div>
                <button className='bg-black hover:scale-105 duration-300 text-[#00df98] w-[200px] rounded-md  font-medium py-3  my-3  mx-auto'>Start Trial</button>
                
            </div>
        </div>

    </div>
  )
}

export default Cards