import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function Cards() {
  return (
    <Card className="w-[350px] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl border-hidden text-emerald-200">
      <CardHeader>
        <CardTitle>Predection</CardTitle>

      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className=" flex space-x-20 text-center">
             <p  className="font-bold">State :</p>
             <p className="font-light">k</p>
            </div>
            <div className=" flex space-x-20 text-center">
             <p  className="font-bold">Disaster : </p>
             <p className="font-light">hjk</p>
            </div>
            <div className=" flex space-x-20 text-center">
             <p  className="font-bold">Origin :</p>
             <p className="font-light">hjk</p>
            </div>
            <div className=" flex space-x-20 text-center">
             <p  className="font-bold">gh</p>
             <p className="font-light">hjk</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
       
        <Button>Analyse the perameter</Button>
      </CardFooter>
    </Card>
  )
}

