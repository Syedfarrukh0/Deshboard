import { Separator } from "@/components/ui/separator"

export function SeparatorPri(props) {
  return (
    <div className={`${props.class.a}`}>
      <Separator className={`my-1 sprater ${props.class.b}`} />
      {/* <Separator orientation="vertical" /> */}
    </div>
  )
}
