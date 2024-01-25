'use client';
import { Button } from "@/components/ui/button";

export function ButtonPri(props) {
  return <Button onClick={props.onClick} className={props.class} > {props.name} </Button>
}

export function ButtonSec(props) {
  return <Button onClick={props.onClick} className={props.class} variant="ghost"> {props.icon} {props.name} </Button>
}
