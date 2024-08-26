import { Event } from '@/parts/Event';
import Graph from '@/parts/Graph';
import Parameter  from '@/parts/Parameter';

const Homepage = () => {
  return (
      <>
      <div className=''>
      <Event/>
       <div className=" flex space-x-10 p-9">
    
 <Graph event="Past Events "Description = "analyse the past events monthy" />
<Graph event="Present Events " Description ="analyse the present event Every day by day" />
<div className='w-5/12'>
<Parameter /> 
</div> 
</div>
</div>
    </>
    )
}
export default Homepage;