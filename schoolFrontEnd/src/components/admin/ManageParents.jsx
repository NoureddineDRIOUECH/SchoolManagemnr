import { RxPlusCircled } from "react-icons/rx";


import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ParentCreateForm from "../../pages/Forms/ParentCreateForm";

export const metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function ManageParents() {
  return (
    <>
      <div className="md:hidden">
       
      </div>
      <div className="hidden md:block">
        {/* <Menu /> */}
          <div className="bg-background">
            <div className="grid">
              {/* <Sidebar playlists={playlists} className="hidden lg:block" /> */}
              <div className="col-span-3 lg:col-span-4 ">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Parents
                        </TabsTrigger>
                        <TabsTrigger value="add_parent">Add New Parent</TabsTrigger>
                        
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <RxPlusCircled className="mr-2 h-4 w-4" />
                          Add Parent
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                  
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                           
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="add_parent"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <ParentCreateForm className='w-100'/>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}