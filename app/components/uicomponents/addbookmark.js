"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {  Command,  CommandEmpty,  CommandGroup,  CommandInput,  CommandItem,  CommandList,} from "@/components/ui/command"
import {  Popover,  PopoverContent,  PopoverTrigger,} from "@/components/ui/popover"
import {  DropdownMenu,  DropdownMenuContent,  DropdownMenuItem,  DropdownMenuLabel,  DropdownMenuSeparator,  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import {  Dialog, DialogClose , DialogContent,  DialogDescription,  DialogHeader,  DialogTitle,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"; // Make sure to import the Input component

const frameworks = [
  {
    value: "newfolder",
    label: "Create New Folder",
  },
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const pages = [
  {
    value: "page1",
    label: "Page 1",
  },
  {
    value: "page2",
    label: "Page 2",
  },
  {
    value: "page3",
    label: "Page 3",
  },
];

export default function BookmarkButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [bookmarkName, setBookmarkName] = useState('');
  const [bookmarkdescription, setBookmarkdescription] = useState('');
  const [bookmarkURL, setBookmarkURL] = useState('');
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('');
  const [openPagePopover, setOpenPagePopover] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('low');
 
  // Default data template
  const defaultData = {
    id: "m5gr84i9",
    name: "Bookmark 1",
    description: "This is the first bookmark.",
    pageName: "New Page",
    created: "22 Jan 24",
    links: ["https://example.com/1"],
    edited: "22 Jan 24",
    linkCount: "1",
    priority: "Low",
    icon: "search",
    bgimage: "https://placehold.co/400",
    folder: "New Folder",
    extra: "-",
    extra0: "-",
  };

  // Function to handle "Save Changes" button click
  const saveChanges = async () => {
    // Combine user-entered data with default values
    const dataToSave = {
      ...defaultData, // Default values
      name: bookmarkName || defaultData.name, // User entered name or default
      description: bookmarkdescription || defaultData.description, // User entered description or default
      links: bookmarkURL ? [bookmarkURL] : defaultData.links, // User entered URL or default
      folder: value ? frameworks.find(fw => fw.value === value)?.label : defaultData.folder, // Folder selection
      pageName: selectedPage ? pages.find(pg => pg.value === selectedPage)?.label : defaultData.pageName, // Page selection
      priority: selectedPriority || defaultData.priority, // Priority
      owner: "bhargavjoshi1237@gmail.com" ,
    };

    try {
      const response = await fetch('/api/saveBookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  if (!isClient) {
    return null; // Render nothing on the server
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="border-[#474747] ml-4 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 0v3h3v2h-3v3h-2V5h-3V3h3V0zM4 3h9v2H6v14.057l6-4.286l6 4.286V10h2v12.943l-8-5.714l-8 5.714z"></path>
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDialogOpen}>
            Bookmark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#09090B] border-[#474747]">
          <DialogHeader>
            <DialogTitle>Add Bookmark</DialogTitle>
            <DialogDescription>
              Please enter the details for the new bookmark.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 items-start">
      
      

            <div className="flex items-center gap-4">
              <Input
                text="Name For Bookmark"
                id="name"
                value={bookmarkName}
                onChange={(e) => setBookmarkName(e.target.value)}
                className="border-[#474747] placeholder:text-[#474747]"
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                text="Description For Bookmark"
                id="name"
                value={bookmarkdescription}
                onChange={(e) => setBookmarkdescription(e.target.value)}
                className="border-[#474747] placeholder:text-[#474747]"
              />
            </div>
            <div className='flex justify-between gap-3'>
              <Input
                text="URL / Link"
                id="name"
                value={bookmarkURL}
                onChange={(e) => setBookmarkURL(e.target.value)}
                className="border-[#474747] placeholder:text-[#474747] w-full"
              />
            </div>

            <div className='flex gap-3'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between border-[#474747]"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select Folder"}
            <ChevronsUpDown className="ml-4 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      if (currentValue === 'newfolder') {
                        setSelectedPage('');
                      }
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Popover open={openPagePopover} onOpenChange={setOpenPagePopover} disabled={value === 'newfolder'}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openPagePopover}
            className="justify-between border-[#474747]"
            disabled={value === 'newfolder'}
          >
            {selectedPage ? pages.find((page) => page.value === selectedPage)?.label : "Select Page"}
            <ChevronsUpDown className="ml-4 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search page..." />
            <CommandList>
              <CommandEmpty>No page found.</CommandEmpty>
              <CommandGroup>
                {pages.map((page) => (
                  <CommandItem
                    key={page.value}
                    value={page.value}
                    onSelect={(currentValue) => {
                      setSelectedPage(currentValue === selectedPage ? "" : currentValue);
                      setOpenPagePopover(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedPage === page.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {page.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      

    </div>
    <div className="items-center mt-2 justify-center w-full h-[100px] flex">
        <button
          className={`w-[100px] h-[100px] ml-1 mr-1 flex flex-col items-center justify-center border rounded-lg ${selectedPriority === 'low' ? 'border-green-500  border-2' : 'border-[#474747]'}`}
          onClick={() => setSelectedPriority('low')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="m10 4l2 1l2-1"></path>
              <path d="M12 2v6.5l3 1.72m2.928-3.952l.134 2.232l1.866 1.232"></path>
              <path d="m20.66 7l-5.629 3.25l.01 3.458m4.887.56L18.062 15.5l-.134 2.232"></path>
              <path d="m20.66 17l-5.629-3.25l-2.99 1.738M14 20l-2-1l-2 1"></path>
              <path d="M12 22v-6.5l-3-1.72m-2.928 3.952L5.938 15.5l-1.866-1.232"></path>
              <path d="m3.34 17l5.629-3.25l-.01-3.458m-4.887-.56L5.938 8.5l.134-2.232"></path>
              <path d="m3.34 7l5.629 3.25l2.99-1.738"></path>
            </g>
          </svg>
          <p className='medium text-sm mt-1'>Low</p>
        </button>

        <button
          className={`w-[100px] h-[100px] hover:glow ml-1 mr-1 shadow-2xl flex flex-col items-center justify-center border rounded-lg ${selectedPriority === 'medium' ? 'border-yellow-500 border-2' : 'border-[#474747]'}`}
          onClick={() => setSelectedPriority('medium')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4.28 11.683L1.324 5.78l.896-.458l2.958 5.896zm3.5 7L5.33 13.78l.885-.458l2.457 4.896zm2.032-5L5.873 5.78l.89-.458l3.958 7.896zm2.175-5.006l-1.439-2.896l.89-.452l1.439 2.89zm.6 10l-1.458-2.896l.89-.452l1.452 2.865zm4.65 0l-3.958-7.896l.89-.458l3.958 7.871zm1.544-5.994L15.329 5.78l.89-.452l3.458 6.89zm3 6l-1.952-3.902l.89-.452l1.958 3.89z"></path>
          </svg>
          <p className='medium text-sm mt-1'>Medium</p>
        </button>

        <button
          className={`w-[100px] h-[100px] ml-1 mr-1 flex flex-col items-center justify-center border rounded-lg ${selectedPriority === 'high' ? 'border-red-500  border-2' : 'border-[#474747]'}`}
          onClick={() => setSelectedPriority('high')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"></path>
          </svg>
          <p className='medium text-sm mt-1'>High</p>
        </button>
      </div></div>
      <DialogClose asChild>
      <Button type="submit" onClick={saveChanges} >Save changes</Button>
           
          </DialogClose>
    </DialogContent></Dialog>
    
    </>
  );
}
