import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>

        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Mrunal.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus unde, sequi quisquam velit illum veritatis accusantium ipsam debitis maxime.</p>
        <div className='flex justify-between max-w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaDribbbleSquare size={30}/>
            <FaGithubSquare size={30}/>

        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='font-sm '>Pricing</li>
                    <li className='font-sm '>Documentation</li>
                    <li className='font-sm '>Guides</li>
                    <li className='font-sm '>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='font-sm '>About</li>
                    <li className='font-sm '>Blog</li>
                    <li className='font-sm '>Press</li>
                    <li className='font-sm '>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='font-sm '>Insights</li>
                    <li className='font-sm '>Marketing</li>
                    <li className='font-sm '>Commerce</li>
                    <li className='font-sm '>Analytics</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='font-sm '>Claim</li>
                    <li className='font-sm '>Policy</li>
                    <li className='font-sm '>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer