
import { Pie_Chart } from "@/parts/Pie_Chart"
import {PopoverDemo} from "@/parts/PopoverDemo"
import {Cards} from "@/parts/Cards"

const FuturePages = () => {
  return (
 <>
 <Pie_Chart/>
 <PopoverDemo/>
<div className="flex space-x-20 text-center">
 <Cards/>
 <Cards/>
 </div>
 </>
  )
}

export default FuturePages