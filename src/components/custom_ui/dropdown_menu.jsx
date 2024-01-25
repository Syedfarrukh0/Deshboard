import {
    CalendarDays,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SeparatorPri } from "./separator"

export function DropdownMenuNotification(props) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="ghost" className='focus-visible:ring-offset-0 focus-visible:ring-transparent'> {props.icon} </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className={`d_down_notification w-80 h-[18.3rem] overflow-hidden overflow-y-auto`}>
                <DropdownMenuLabel> Notification </DropdownMenuLabel>
                <SeparatorPri class={{a:'', b:''}} />
                <DropdownMenuItem className="notification_card flex justify-between space-x-4 py-3 px-2 cursor-pointer">
                    <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </DropdownMenuItem>
                <SeparatorPri class={{a:'', b:''}} />
                <DropdownMenuItem className="notification_card flex justify-between space-x-4 py-3 px-2 cursor-pointer">
                    <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </DropdownMenuItem>
                <SeparatorPri class={{a:'', b:''}} />
                <DropdownMenuItem className="notification_card flex justify-between space-x-4 py-3 px-2 cursor-pointer">
                    <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
