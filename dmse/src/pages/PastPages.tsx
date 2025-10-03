
import { Egraph } from '@/parts/Egraph';
import {TableDemo } from '@/parts/TableDemo';

export const PastPages = () => {
  return (
    <>
        <h1 className="text-3xl font-mono text-center bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent font-bold">
      Past Disaster Events Overview
    </h1>
    <p className="text-center text-gray-300/85">
      Explore a summary of significant past disaster events. <br /> The graph visualizes event trends over time, <br />while the table provides detailed information <br />for each event.
    </p>
    <div className='flex w-full'>

    <div className='   justify-center block w-[50%] rounded-md text-emerald-300  border-[2px] border-blue-100 m-2 p-4 '>
    <Egraph/>
  
    </div>
    <div className='bg-slate-200/10 rounded-md text-blue-200 block w-[50%] border-[2px] border-blue-100 m-2 p-4'>
    <TableDemo/>
    </div>
    
    </div>
    </>
  )
}
export default PastPages