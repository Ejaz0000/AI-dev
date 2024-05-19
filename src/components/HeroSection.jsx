import React from 'react'
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Img1 from "../assets/ai.png"
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-2 lg:mt-2'>
        <div className='flex flex-wrap-reverse lg:flex-wrap'>
        <div className="w-full sm:w-1/2 lg:w-1/2 mt-4 lg:mt-16 lg:pr-6">
        <h1 className="text-4xl md:text-6xl text-center lg:text-7xl lg:text-start tracking-wide">
            <span className="text-purple-500">
            AI DEV 
            </span>
            assisting tool for
            <span className="bg-gradient-to-r from-purple-500 to-blue-950 text-transparent bg-clip-text">
            {" "}developers
            </span>
        </h1>
        <p className='mt-10 text-lg text-center lg:text-start text-neutral-500 max-w-4xl'>Empower your creativity and bring your developing ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!</p>
        <div className="flex justify-center lg:justify-start my-10 gap-0 lg:gap-2">
        <a href='#' className="bg-gradient-to-r from-purple-600 to-blue-950 py-3 px-4 mx-2 lg:mx-0 rounded-md">
          Start for free
        </a>
        <a href='#' className="py-3 px-4 mx-0 border rounded-md">
            Documentation
        </a>
        </div>
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,}}
        transition={{  duration: 5  }}
        className="w-full sm:w-1/2 lg:w-1/2 lg:pl-6">
        <img className="" src={Img1} alt='Img1'/>

        </motion.div>
        </div>
        <div className='mt-10'>
            <div className='mx-2 lg:flex items-center space-x-2'>
                
            <video autoPlay loop muted className="w-full lg:w-1/2 rounded-lg border border-purple-700 z-10">
                <source src={Video1} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
            <motion.p 
            initial={{ opacity: 0, x: "-80px"}}
            whileInView={{opacity:1 , x: 0}}
            viewport={{margin:"-100px"}}
            transition={{  duration: 1  }}
            className='px-4 mt-2 lg:mt-0 text-center lg:text-start text-neutral-400'>
                Empower your creativity and bring your developing ideas to life with our
        intuitive development tools. Get started today and turn your imagination
                </motion.p>
            </div>
            <div className='mx-2 flex flex-col-reverse lg:flex lg:flex-row items-center space-x-2 mt-20'>
            <motion.p 
             initial={{ opacity: 0, x: "80px"}}
             whileInView={{opacity:1 , x: 0}}
             viewport={{margin:"-100px"}}
             transition={{  duration: 1  }}
            className='px-4 mt-2 lg:mt-0 text-center lg:text-start text-neutral-400'>
                Empower your creativity and bring your developing ideas to life with our
        intuitive development tools. Get started today and turn your imagination
                </motion.p >
            <video autoPlay loop muted className="w-full lg:w-1/2 rounded-lg border border-purple-700">
                <source src={Video2} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
    </div>
  )
}

export default HeroSection