
import { Pie_Chart } from "@/parts/Pie_Chart"
import {PopoverDemo} from "@/parts/PopoverDemo"
import {Cards} from "@/parts/Cards"

const FuturePages = () => {
  return (
 <>
 <Pie_Chart/>
 <div className=" flex justify-end">
 <PopoverDemo />
 </div>
<div className="flex space-x-10 text-center">
<Cards/>
 <Cards/>
 <Cards/>


 </div>
 
 </>
  )
}

export default FuturePages