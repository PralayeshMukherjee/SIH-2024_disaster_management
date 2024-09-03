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
    Origin:"Behar",
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
      <Table>
        <TableCaption>A list of Events</TableCaption>
        <TableRow className="bg-slate-300">
      <TableHead className="w-[100px]">Origin</TableHead>
      <TableHead>Disaster</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Duration(days) </TableHead>
    </TableRow>
    <TableBody>
        {no.map((no) => (
          <TableRow key={no.no}>
            <TableCell className="font-medium">{no.Origin}</TableCell>
            <TableCell>{no.Disaster}</TableCell>
            <TableCell>{no.Date}</TableCell>
            <TableCell className="text-right">{no.Duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
            
              </Table>
  )
}