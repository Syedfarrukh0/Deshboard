import { Input } from "@/components/ui/input"

export function InputSearch(props) {
    return <Input
        type="search"
        placeholder={`${props.placeholder}`}
        className={`${props.class}`}
    />
}