"use client"

import { useState } from "react"
import { QuoteForm } from "@/components/QuoteForm"
import quotesData from "@/data/quotes.json"

export default function Home() {
  const [quotes, setQuotes] = useState<string[]>([])
  const [topic, setTopic] = useState("")

  const handleGenerate = (inputTopic: string) => {
    const topicLower = inputTopic.toLowerCase()
    setTopic(inputTopic)
    
    const foundTopic = quotesData.find(item => 
      item.topic.toLowerCase() === topicLower
    )
    
    setQuotes(foundTopic ? foundTopic.quotes : [])
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Motivational Quote Generator</h1>
        
        <QuoteForm onGenerate={handleGenerate} />
        
        {quotes.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quotes about {topic}:</h2>
            <ul className="space-y-4">
              {quotes.map((quote, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-700">{quote}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}