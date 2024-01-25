'use client'

import { AreaChart, Card, Title } from "@tremor/react";
import { FaArrowUp } from "react-icons/fa6";

const chartdata3 = [
    {
        date: "Apr",
        "Mobile apps": 50,
    },
    {
        date: "May",
        "Mobile apps": 40,
    },
    {
        date: "Jun",
        "Mobile apps": 300,
    },
    {
        date: "Jul",
        "Mobile apps": 220,
    },
    {
        date: "Aug",
        "Mobile apps": 500,
    },
    {
        date: "Sep",
        "Mobile apps": 250,
    },
    {
        date: "Oct",
        "Mobile apps": 400,
    },
    {
        date: "Nov",
        "Mobile apps": 230,
    },
    {
        date: "Dec",
        "Mobile apps": 500,
    },
];

const customTooltip = ({ payload, active }) => {
    if (!active || !payload) return null;
    return (
        <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
            {payload.map((category, idx) => (
                <div key={idx} className="flex flex-1 space-x-2.5">
                    <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
                    <div className="space-y-1">
                        <p className="text-tremor-content">{category.dataKey}</p>
                        <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Chart = (props) => {
    return (
        <div className={`chart_div rounded-md ${props.class}`}>
            <Card className="p-4">
                <Title className="text-[#344767]"> Sales Overview </Title>
                <p className="p-0 pt-2 text-sm font-medium text-[#344767b6] flex justify-start items-center"> 
                    <span className="text-green-500 pe-1 m-0"><FaArrowUp className="font-medium" /></span> <span className="text-green-500 font-medium text-[0.91rem] pe-1"> 4% more </span> in 2021
                </p>
                <AreaChart
                    className="h-[17rem] mt-3"
                    data={chartdata3}
                    index="date"
                    categories={["Mobile apps"]}
                    colors={["blue"]}
                    yAxisWidth={false}
                    customTooltip={customTooltip}
                    showLegend = {false}
                    curveType="monotone"
                />
            </Card>
        </div>
    );
}

export default Chart;