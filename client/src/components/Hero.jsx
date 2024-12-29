import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='container 2xl:px-20 mx-auto my-10 '>
       <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
         <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
         <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Rights Here - Explore the Best job Oppertunites and Take Step Towards Your Future! </p>
          <div>
             <div>
               <img src={assets.search_icon} alt="" />
               <input type="text" placeholder='Search for jobs' className='max-sm:text-sm p-2 rounded outline-none w-full' />
             </div>
             <div>
               <img src={assets.location_icon} alt="" />
               <input type="text" placeholder='Location' className='max-sm:text-sm p-2 rounded outline-none w-full' />
             </div>
              <button>Search</button>
          </div>
       </div>
    </div>
  )
}

export default Hero