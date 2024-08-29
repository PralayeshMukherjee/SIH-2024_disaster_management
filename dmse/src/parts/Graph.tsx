

function Graph({event,Description}) {
  return (
<div className="relative h-[400px] w-[300px] rounded-sm bg-cyan-800 ">
 <h1 className="flex justify-center my-10  bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg  border-hiddenpy-9 px-9 mx-20  rounded-full">.</h1>
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{event}</h1>
    <p className="mt-2 text-sm text-gray-300">
     {Description}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold  bottom-4 text-white">
      
      View Details →
    </button>
  </div>
</div>
  )
}

export default Graph

