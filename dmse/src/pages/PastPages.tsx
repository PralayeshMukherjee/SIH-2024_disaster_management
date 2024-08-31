import { ScrollArea } from '@/components/ui/scroll-area';
import { Egraph } from '@/parts/Egraph';
import {TableDemo } from '@/parts/TableDemo';

export const PastPages = () => {
  return (
    <>
    <ScrollArea className="flex-1 flex-col">
    <div className='  flex justify-center '>
    <Egraph/>
  
    </div>
    <div className='bg-white/10 rounded-sm text-emerald-300'>
    <TableDemo/>
    </div>
    </ScrollArea>
    </>
  )
}
export default PastPages