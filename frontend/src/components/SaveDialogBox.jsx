import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "./ui/dialog"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Badge } from './ui/badge'
import { Checkbox } from './ui/checkbox'

const SaveDialogBox = ({handleSubmit}) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    const [isPublic, setIsPublic] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button className="mt-2">Save Prompt</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Save Prompt</DialogTitle>
          <DialogDescription>
            Save your favourite prompts to access them later.
          </DialogDescription>
        </DialogHeader>
        <h2 className='font-bold px-1.5'>Title</h2>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="title" className="sr-only">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Enter a title for your prompt"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <h2 className='font-bold px-1.5'>Tags</h2>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="tags" className="sr-only">
              Tags
            </Label>
            <Input
              id="tags"
              placeholder="Separate tags with commas"
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-wrap justify-start'>
            {tags.split(",").map((tag, index) => (
              tag.trim() !== "" &&
              <Badge variant="outline" key={index} className="m-1">
                {tag.trim()}
              </Badge>
            ))}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Checkbox
            id="isPublic"
            checked={isPublic}
            onCheckedChange={setIsPublic}
          />
          <label htmlFor="isPublic">
            Make your prompt public.
          </label>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>

          <Button type="button" onClick={async () => {
                await handleSubmit()
                setOpen(false)
            }} >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SaveDialogBox