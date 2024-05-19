import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants'
import codeImg from "../assets/code.jpg"
import {motion} from 'framer-motion'

const Workflow = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-6 text-center tracking-wide'>
                Accelerate your
                <span className="bg-gradient-to-r from-purple-500 to-blue-950 text-transparent bg-clip-text">
                {" "}coding workflow.
                </span>
            </h2>

        <div className='flex flex-wrap justify-center mt-6'>
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt='code'/>
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item,index)=>(
                    <div key={index} className='flex mb-12'>
                        <motion.div 
                        initial={{ opacity: 0}}
                        whileInView={{opacity:1}}
                        viewport={{margin:"-100px",once:true}}
                        transition={{  delay: 0.6*index  }}
                        className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center
                        rounded-full">
                            <CheckCircle2/>
                        </motion.div >
                        <div>
                        <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                        <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow