/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6jivQ3NtcHe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import ModeToggle from "../components/mode-toggle"
import { LOGIN_ROUTE, STUDENT_DASHBORD_ROUTE } from "../router"

export default function NavBar() {
  return (
    <header className="flex flex-col md:flex-row h-auto md:h-16 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-gray-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to={'/'} className="flex items-center gap-2 text-lg font-semibold" >
          <SchoolIcon className="h-6 w-6" />
          <span className="sr-only">School Management</span>
        </Link>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </div>
      <nav className="hidden md:flex items-center gap-4 md:gap-6 mt-4 md:mt-0 md:ml-auto">
        <NavigationMenu>
          <NavigationMenuList>
           
            <NavigationMenuLink asChild>
              <Link
                to={STUDENT_DASHBORD_ROUTE}
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 focus:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                
              >
                Students
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to={'/users'}
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 focus:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                
              >
                Teachers
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 focus:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                
              >
                Classes
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 focus:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                
              >
                Settings
              </Link>
            </NavigationMenuLink>

        <NavigationMenuLink asChild>
              <Link
                to={LOGIN_ROUTE}
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 focus:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                
              >
                Login
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle/>
      </nav>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}