"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function Checkboxpri(props) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className={props.class} />
    </div>
  )
}
