import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import logo from './assets/logo.svg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GenerateCard from './components/GenerateCard'
import EditCard from './components/EditCard'
import SavedCard from './components/SavedCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex min-h-svh max-w-lg flex-col p-2 items-center justify-start ">
      <div className='flex justify-between items-center h-30 w-30'>
        <img src={logo} className="logo h-full w-full" alt="logo" />
      </div>
      <Tabs defaultValue="generate" className="w-full">
        <TabsList className='w-full'>
          <TabsTrigger value="generate">Generate</TabsTrigger>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>
        <TabsContent value="generate">
          <GenerateCard />
        </TabsContent>
        <TabsContent value="edit">
          <EditCard />
        </TabsContent>
        <TabsContent value="saved" className="overflow-y-clip">
          <SavedCard />
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}

export default App
