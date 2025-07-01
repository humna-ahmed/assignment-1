"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function QuoteForm({ onGenerate }: { onGenerate: (topic: string) => void }) {
  const [topic, setTopic] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerate(topic)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="topic">Enter a topic:</Label>
        <Input
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., success, motivation"
        />
      </div>
      <Button type="submit">Generate Quotes</Button>
    </form>
  )
}