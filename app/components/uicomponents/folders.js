"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Folders({data}) {
  const [folderName, setFolderName] = useState('');

  const handleCreateFolder = async () => {
    const dataToSave = {
      email: 'bhargavjoshi1237@gmail.com', // Replace with the actual email
      folderName: folderName,
    };

    try {
      const response = await fetch('/api/createfolder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        console.log('Data saved successfully');
        // Optionally update the local state or refetch data as needed
        setData(prevData => ({
          ...prevData,
          folders: [...prevData.folders, { name: folderName, icon: 'folder', pages: [] }],
        }));
        setFolderName('');
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

    return ( <>
    
    <div className="h-[49%] bg-[#161616] rounded-lg">
      <div className="w-[86%] ml-auto pt-5 mr-auto flex items-center pb-4">

      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16z"></path></svg>
      <p className="semibold ml-3 mt-0.5">Bookmark Folders</p>
      
      <Dialog>
  <DialogTrigger className="ml-auto">
<svg className="ml-auto transition-all rounded-2xl p-1 hover:bg-[#2e2e2e]" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path></svg>
    
  </DialogTrigger>
  <DialogContent className="bg-[#09090b] border-[#474747]">
    <DialogHeader>
      <DialogTitle>Create a new folder.</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <Input
    placeholder="Folder Name"
    value={folderName}
    onChange={(e) => setFolderName(e.target.value)}
    className="w-[100%] ml-auto mr-auto mt-2 border-[#474747]"
  />
<DialogClose className="mt-2" asChild>
<Button className="w-[100%] ml-auto mr-auto mt-2" onClick={handleCreateFolder}>
                  Create Folder
                </Button>
</DialogClose>
  </DialogContent>
</Dialog>
      </div>
      <ScrollArea className="h-[400px] -mt-3 w-full border-none rounded-md border p-4">
     
      <div className="w-[100%]  ml-auto mr-auto ">
      <Accordion className="w-full" type="single" collapsible>
      {data[0].folders.map((folder, folderIndex) => (
        <AccordionItem key={folderIndex} value={`item-${folderIndex + 1}`}>
          <AccordionTrigger>
            <div className="flex items-center">
              <span className="material-icons">{folder.icon}</span>
              <p className="medium ml-2">{folder.name}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-[100%] ml-auto flex">
              <div className="w-[6%] mt-1.5 rounded-lg">
                <Separator orientation="vertical" className="bg-[#474747] text-[#474747]" />
              </div>
              <div className="w-[100%] ml-auto">
                {folder.pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="w-full h-[40px] mt-2 bg-[#212121] rounded-xl flex items-center">
                    <p className="medium h-fit ml-4">{page.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
      </div>
     

      </ScrollArea>
    </div>

    </> )
}