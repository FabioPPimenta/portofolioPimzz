import React from 'react'

const CoolComponents = () => {
  return (
    <div className='flex w-full h-full  bg-slate-100' >
      
      {/* Text */}
      <div className='flex flex-col w-full justify-between text-start mx-2'>
        <div className='h-24 bg-red-700'></div>
        <h2 className='font-semibold text-xl'>
          Education: 
        </h2>
        <p>
          Instituto Superior Técnico -
          Bachelor&apos;s degree, Computer Science and Engineering
          (2015 - 2019)
        </p>
        <p>
          Instituto Superior Técnico -
          Master&apos;s degree, Computer Science and Engineering
          (2019 - 2021)
        </p>

        <h2 className='font-semibold text-xl'>
          Experience: 
        </h2>
        
        <div className='flex flex-col w-full h-64'>
          <p>
            Fullstack Developer, Asistobe AS · Asistobe AS ( Nov 2021 - Today )
          </p>
          <p>Responsible for developing and maintaining a web tool for the optimization of public transportation.</p>
          <div className='flex flow-row'>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mr-1'>ReactJS</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>NodeJS</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>ExpressJS</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>MongoDB</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>Git</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>Docker</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>AWS</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>Tailwind</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>Javascript</div>
            <div className='border-2 border-zinc-400 rounded-md p-0.5 text-xs mx-1'>Jest</div>

 
          </div>
        </div>
  
        

      </div>

    </div>
  )
}

export default CoolComponents