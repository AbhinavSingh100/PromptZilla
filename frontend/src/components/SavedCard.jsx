import React from 'react'
import SavedPromptCard from './SavedPromptCard'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ScrollBar } from './ui/scroll-area'

const SavedCard = () => {

    const savedPrompts = [{title: "Prompt 1", description: "Description 1", tags: ["tag1", "tag2"]},
        {title: "Prompt 2", description: "Description 2", tags: ["tag3"]},
        {title: "Prompt 2", description: "Description 2", tags: ["tag3"]},
        {title: "Prompt 2", description: "Description 2", tags: ["tag3"]},
        {title: "Prompt 2", description: "Description 2", tags: ["tag3"]}]
  return (
    <ScrollArea>
        <div className='flex flex-col gap-2 p-2'>
            {savedPrompts.map((prompt, index) => (
                <SavedPromptCard key={index} {...prompt} />
            ))}
        </div>
        <ScrollBar orientation='vertical' />
    </ScrollArea>
    
  )
}

export default SavedCard