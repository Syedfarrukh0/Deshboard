import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  import Image from "next/image"

  export function Avatar_pri(props) {
    return (
      <Avatar className={`${props.class}`}>
        {
          props.img !== '' ? <Image src={props.img} alt={props.img} /> : <AvatarImage src={`https://github.com/shadcn.png`} alt="img" />
        }
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  