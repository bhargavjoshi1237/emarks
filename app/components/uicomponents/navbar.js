import { Input } from "@/components/ui/input"
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import BookmarkButton from "./addbookmark"

const NavbarX = () => {
  return ( <>
    
    <div className="bg-[#161616] w-[99.1%] mt-2.5 ml-auto mr-auto h-[85px] rounded-lg flex items-center">
    <img src="https://i.ibb.co/zfZ2C5V/original-27571f855833b00c0d1abd5609ca7f3e-removebg-preview.png" className="h-[53px] ml-[1.5%] -mt-[3px] transition-transform duration-500 hover:rotate-180" alt="" /><div className="ml-auto flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-2.5 -mr-8 text-[#474747]" width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10"></path></svg>
    <Input type="email"  placeholder="       Search Bookmarks"  className="border-[#474747] w-[250px] placeholder:text-[#474747] placeholder:ml-8" />
    
    </div>
    
   
   
          <BookmarkButton />
 

 <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Avatar className="h-[33px] w-[33px] mr-8 ml-3">  <AvatarImage  src="https://avatars.akamai.steamstatic.com/1e0e49c84061d22b86bf42d6807d5cbfcc329723_medium.jpg" /></Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
    </div>
  
    </> )
}
NavbarX.displayName = "NavbarX"

export default NavbarX