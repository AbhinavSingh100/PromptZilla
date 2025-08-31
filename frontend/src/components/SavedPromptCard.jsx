import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Badge } from './ui/badge'

const SavedPromptCard = ({ title, description, tags }) => {
  return (
    <Card className="px-2 py-6">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            {tags && tags.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <Badge variant="outline" key={tag}>{tag}</Badge>
                        ))}
                    </div>
                )
            }
        </CardHeader>
        <CardDescription className="mx-2">{`${description.slice(0, 100)}`}{description.length > 100 && "..."}</CardDescription>
    </Card>
  )
}

export default SavedPromptCard