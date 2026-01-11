"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCarouselProps {
  images: string[]
  title: string
  compact?: boolean
}

export function ProjectCarousel({ images, title, compact = false }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="group relative">
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          compact ? "aspect-[3/2]" : "aspect-video",
          !compact && "rounded-xl border border-border/50",
        )}
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} screenshot ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
        />

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            goToPrevious()
          }}
          className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            goToNext()
          }}
          className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {compact && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrentIndex(index)
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === currentIndex ? "w-4 bg-accent" : "w-1.5 bg-white/50 hover:bg-white/70",
                )}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {!compact && (
        <div className="mt-3 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentIndex(index)
              }}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === currentIndex ? "w-4 bg-accent" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
