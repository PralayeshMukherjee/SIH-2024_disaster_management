import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Fliter</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Disesters</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions to know the result
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Cyclone">Cyclone</Label>
              <Input
                id="width"
                defaultValue="100km/sec"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Earthquake">Earthquake</Label>
              <Input
                id="maxWidth"
                defaultValue="Ms 7.0"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Tsunami">Tsunami</Label>
              <Input
                id="height"
                defaultValue="23 km/hr"
                className="col-span-2 h-8"
              />
          
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Volcanic">Volcanic</Label>
              <Input
                id="maxHeight"
                defaultValue="56"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Flood">Flood</Label>
              <Input
                id="maxHeight"
                defaultValue="88"
                className="col-span-2 h-8"
              />
               </div>
               <div className="justify-items-end ">
            <Button>Filter</Button>
            
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
