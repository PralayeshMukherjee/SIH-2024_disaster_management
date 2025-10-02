

interface GraphProps {
  event: string;
  Description: string;
}

function Graph({ event, Description }: GraphProps) {
  return (

<div>
  <div className="p-4 border rounded-lg shadow-sm border-pink-200 font-sans bg-red-100/20 w-full m-10 ">
    <h2 className="text-2xl font-mono text-purple-200">{event}</h2>
    <p className="mt-2 text-sm text-purple-100">{Description}</p>
   <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold  bottom-4 text-white hover:text-blue-200 ">
      
      View Details →
    </button>
  </div>

</div>


  )
}

export default Graph

