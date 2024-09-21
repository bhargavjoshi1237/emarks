import React from "react"
import NavbarX from "./components/uicomponents/navbar"
import VerticalNav from "./components/uicomponents/verticalnav"
import Folders from "./components/uicomponents/folders"
import { MongoClient } from 'mongodb';
import HomeX from "./components/uicomponents/home"
// import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/Resizable"
import { ResizablePanelGroup,ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
async function fetchMongoData() {
  const uri = "mongodb+srv://bhargavjoshi1237:Shiro123@cluster0.pwwbqv5.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    const startTime = Date.now();
    await client.connect();
    const db = client.db("Emarks"); 
    const collection = db.collection("bookmarks"); 
    const collectionuser = db.collection("uesrs");
    const data = await collection.find({}).toArray();
    const datauser = await collectionuser.find({email: "bhargavjoshi1237@gmail.com"}).toArray();
    
    await client.close();
    const endTime = Date.now();
    const responseTime = endTime - startTime; 
    return { data, responseTime ,datauser}; 

  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw new Error("Failed to fetch data from MongoDB.");
  }
}
export default async function Page() {
  const { data, responseTime, datauser } = await fetchMongoData();

  return (
    <div className="bg-[#212121] h-[calc(100vh)]">
      <NavbarX />
      <div className="flex w-[99%] ml-auto mr-auto mt-2.5 rounded-lg h-full">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={18} className="mr-2.5 h-full rounded-lg">
            <VerticalNav />
            <Folders data={datauser} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="w-full bg-[#161616] ml-2.5 h-[88%] mb-2.5 rounded-lg">
              <HomeX data={data} time={responseTime} userdata={datauser}/>
              {/* <p>{JSON.stringify(data)}</p> */}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

// Add display name to the component
Page.displayName = "Page"
export const revalidate = 0; // Disable caching, so the page fetches new data on every request
