'use client'

const Card = (props) => {
    return (
        <div className="card_wrapper min-h-fit flex">

            <div className="card w-full flex justify-between p-3 rounded-lg">

                <div className="card_content__area space-y-1">                    
                    <h4 className="text-[0.91rem] text-[#67748e] font-semibold mb-0"> {props.title} </h4>
                    <p className="text-xl font-bold m-0">
                        {props.ammount} 
                    </p>
                    <div className="flex items-center pt-2">
                        <span className="text-[0.95rem] text-[#67748e] font-medium text-muted-foreground">
                            <span className={`text-sm font-bold ${props.percent_text_color}`}> {props.rev_percent} </span> 
                            {props.past_days} 
                        </span>
                    </div>
                </div>

                <div className="icon_div bg-slate-100 h-fit flex justify-center items-center p-4 rounded-[50%]">
                    {props.icon} 
                </div>

            </div>

        </div>
    );
}

export default Card;