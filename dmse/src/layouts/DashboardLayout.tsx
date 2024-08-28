
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,

    Package2,
    Search,
    
} from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout= () => {
  return (
<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gradient-to-r from-teal-700 to-sky-950 opacity-100 backdrop-blur-3xl  ">
            <div className="hidden border-r bg-muted/40 md:block h-full ">
                <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                           
                            <span className="">CatastroPick</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8 bg-gradient-to-r from-cyan-900 to-blue-950 opacity-100 backdrop-blur-3xl">
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 opacity-100 backdrop-blur-3xl  bg-gradient-to-r from-cyan-900 to-blue-950 ">
                        <nav className="grid items-start px-2  text-balance font-medium lg:px-4 text-center 0  sticky top-0">
                            <Link
                                to="/dashboard/home"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  text-teal-500 transition-all hover:text-primary">
                                <Home className="h-4 w-4" />
                                Home
                            </Link>
                            <Link
                to="/dashboard/PastPages"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground   text-teal-500 transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                past
              </Link>
                            <Link
                to="/dashboard/FuturePages"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  text-teal-500 transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Future
              </Link>
              <Link
                 to="/dashboard/Analysis"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  text-teal-500 transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
                            
                        </nav>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col lg:px-6  bbg-gradient-to-rbg-gradient-to-rbg-gradient-to-r from-cyan-900 to-blue-950 opacity-100 backdrop-blur-3xl ">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] bg-gradient-to-r from-cyan-900 to-blue-950 opacity-100 backdrop-blur-3xl ">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    to="#"
                                    className="flex items-center gap-2 text-lg font-semibold">
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <Home className="h-5 w-5" />
                                   Home
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <LineChart className="h-5 w-5" />
                                    Past
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <LineChart className="h-5 w-5" />
                                    Future
                                </Link>
                                <Link
                                    to="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                                    <LineChart className="h-5 w-5" />
                                    Analytics
                                </Link>
                            </nav>
                           
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1 sticky top-0">
                        <form>
                            <div className="relative bg-gradient-to-r from-cyan-900 to-blue-950 opacity-100 backdrop-blur-3xl">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground " />
                                <Input
                                    type="search"
                                    placeholder="Search ..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
  )
}

export default DashboardLayout;