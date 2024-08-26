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
    no:"1",
    state:"west bengal",
    incident:"Cyclone",
    Speed:23,
  },
    {
      no:"1",
      state:"west bengal",
      incident:"Cyclone",
      Speed:23,
      },
    {
      no:"1",
      state:"west bengal",
      incident:"Cyclone",
      Speed:23,
      },
    {
      no:"1",
      state:"west bengal",
      incident:"Cyclone",
      Speed:23,
      },
    {
      no:"1",
      state:"west bengal",
      incident:"Cyclone",
      Speed:23,
      },
    {
      no:"1",
      state:"west bengal",
      incident:"Cyclone",
      Speed:23,
      },
    {
    no:"1",
    state:"west bengal",
    incident:"Cyclone",
    Speed:23,
    },
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>A list of Events</TableCaption>
        <TableRow className="bg-slate-300">
      <TableHead className="w-[100px]">no</TableHead>
      <TableHead>State</TableHead>
      <TableHead>incident</TableHead>
      <TableHead className="text-right">Speed</TableHead>
    </TableRow>
    <TableBody>
        {no.map((no) => (
          <TableRow key={no.no}>
            <TableCell className="font-medium">{no.no}</TableCell>
            <TableCell>{no.state}</TableCell>
            <TableCell>{no.incident}</TableCell>
            <TableCell className="text-right">{no.Speed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
            
              </Table>
  )
}