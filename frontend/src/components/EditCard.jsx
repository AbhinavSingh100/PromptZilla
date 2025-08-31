import React, { useEffect, useState } from 'react'
import { Card,
        CardAction,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle, 
    } from './ui/card'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Copy } from 'lucide-react'
import SaveDialogBox from './SaveDialogBox'

const EditCard = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [inputPrompt, setInputPrompt] = useState("Input Prompt")
    const [outputPrompt, setOutputPrompt] = useState("Improved Prompt")
    const [showCopied, setShowCopied] = useState(false)

    useEffect(() => {
        if(isLoading) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if(prev < 90){
                        console.log(`Progress: ${prev + 10}%`)
                        return prev + 10
                    }
                    else {
                        clearInterval(interval)
                        return prev
                    }
                })
                
            }, 1000)
        }
    }, [isLoading])

    const handleImprovePrompt = () => {
        // Logic to improve the prompt
        if(!isLoading) {
            setProgress(0)
            setIsLoading(true)
            // Simulate an API call
            setTimeout(() => {
                setIsLoading(false)
            }, 12000)
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt)
        setShowCopied(true)
        setTimeout(() => {
            setShowCopied(false)
        }, 2000)

    }

    const savePrompt = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    const handleDialogSubmit = async () => {
        // Logic to handle dialog submission
        try {
            await Promise.race([
                savePrompt(),
                new Promise((_, reject) => setTimeout(() => reject(new Error("Submission failed")), 5000))
            ])
        } catch (error) {
            alert(error.message || "Submission Failed")
        }
    }

  return (
    <>
      <Card className="px-2">
        <CardHeader>
            <CardTitle>Improve Your Prompt with AI</CardTitle>
            <CardDescription>Enter your Prompt below.</CardDescription>
            <CardAction>Save Changes</CardAction>
        </CardHeader>
        <Textarea placeholder="Enter your prompt" className="resize-none" onChange={(e) => setInputPrompt(e.target.value)} />
        <Button className="mt-2" onClick={handleImprovePrompt}>Improve Prompt</Button>
        {isLoading && 
            <Progress value={progress} />
        }
        <CardHeader>
            <CardTitle>Improved Prompt</CardTitle>
        </CardHeader>
        <div className='relative'>
            <Copy className='h-3 w-3 absolute right-1 top-1 z-1' onClick={handleCopy} />
            {showCopied && (
                <span className="absolute right-8 top-1 bg-black opacity-80 text-white text-xs px-2 py-1 rounded z-10">
                    Copied!
                </span>
            )}
            <Textarea placeholder="Enter your prompt" className="resize-none" onChange={(e) => setOutputPrompt(e.target.value)} />
        </div>
        <SaveDialogBox handleSubmit={handleDialogSubmit} />
      </Card>
    </>
  )
}

export default EditCard