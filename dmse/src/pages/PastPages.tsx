import { Egraph } from '@/parts/Egraph';
import {TableDemo } from '@/parts/TableDemo';

export const PastPages = () => {
  return (
    <>
    <div className='  flex justify-center '>
    <Egraph/>
  
    </div>
    <div className='bg-white/10 rounded-sm text-emerald-300'>
    <TableDemo/>
    </div>
    </>
  )
}
export default PastPages