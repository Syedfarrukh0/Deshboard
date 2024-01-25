"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function Progress_bar_pri(props) {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(props.progress), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className={`${props.class}`} />
}
