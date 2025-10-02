import {
    Table,
    TableBody,
    TableCaption,
    TableCell,   
    TableHead,
    TableRow,
  } from "@/components/ui/table"
  
  
const no = [
  {
    Date:"22-04-24",
    Origin:"West bengal",
    Disaster:"Cyclone",
    Duration:"5",
  },
  {
    Date:"20-06-24",
    Origin:"Bihar",
    Disaster:"Tsunami",
    Duration:"9",
  },
  {
    Date:"22-04-24",
    Origin:"West bengal",
    Disaster:"Cyclone",
    Duration:"5",
  },
  {
    Date:"09-09-24",
    Origin:"Maharastra",
    Disaster:"Flood",
    Duration:"10",
  }, 
  {
    Date:"04-02-24",
    Origin:"Rajsthan",
    Disaster:"Earthquake",
    Duration:"1",
  }, 
  {
    Date:"07-03-24",
    Origin:"Maharastra",
    Disaster:"Flood",
    Duration:"9",
  }, 
  ]
  
  export function TableDemo() {
    return (
      <Table className=" w-full rounded-md border-slate-300/20 ">
        <TableCaption>A list of Events</TableCaption>
        <TableRow className="bg-slate-300 rounded-xl ">
      <TableHead className="w-[100px]">Origin</TableHead>
      <TableHead>Disaster</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Duration(days) </TableHead>
    </TableRow>
    <TableBody>
        {no.map((item, idx) => (
          <TableRow key={`${item.Date}-${item.Origin}-${idx}`}>
            <TableCell className="font-medium">{item.Origin}</TableCell>
            <TableCell>{item.Disaster}</TableCell>
            <TableCell>{item.Date}</TableCell>
            <TableCell className="text-right">{item.Duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
            
              </Table>
  )
}